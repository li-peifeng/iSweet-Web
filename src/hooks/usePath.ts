import axios, { Canceler } from "axios"
import {
  appendObjs,
  password,
  ObjStore,
  State,
  getPagination,
  objStore,
  hasHistory,
  recoverHistory,
  clearHistory,
  me,
} from "~/store"
import {
  fsGet,
  fsList,
  handleRespWithoutNotify,
  log,
  notify,
  pathJoin,
} from "~/utils"
import { useFetch } from "./useFetch"
import { useRouter } from "./useRouter"

let first_fetch = true

let cancelObj: Canceler
let cancelList: Canceler
export function addOrUpdateQuery(
  key: string,
  value: any,
  type = "replaceState",
) {
  let url = type === "location" ? location.href : location.hash

  if (!url.includes("?")) {
    url = `${url}?${key}=${value}`
  } else {
    if (!url.includes(key)) {
      url = `${url}&${key}=${value}`
    } else {
      const re = `(\\?|&|\#)${key}([^&|^#]*)(&|$|#)`
      url = url.replace(new RegExp(re), "$1" + key + "=" + value + "$3")
    }
  }

  if (type === "location") {
    location.href = url
  }

  if (type === "pushState") {
    history.pushState({}, "", url)
  }

  if (type === "replaceState") {
    history.replaceState({}, "", url)
  }
}
function getQueryVariable(name: string): string {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if (pair[0] == name) {
      return pair[1]
    }
  }
  return ""
}
const IsDirRecord: Record<string, boolean> = {}
let globalPage = 1
export const getGlobalPage = () => {
  return globalPage
}
export const setGlobalPage = (page: number) => {
  const pagination = getPagination()
  globalPage = page
  if (pagination.type === "pagination") {
    addOrUpdateQuery("page", page)
  }
  console.log("setGlobalPage", globalPage)
}
export const resetGlobalPage = () => {
  setGlobalPage(1)
}
export const usePath = () => {
  const { pathname, to } = useRouter()
  const [, getObj] = useFetch((path: string) =>
    fsGet(
      path,
      password(),
      new axios.CancelToken((c) => {
        cancelObj = c
      }),
    ),
  )
  const pagination = getPagination()
  if (pagination.type === "pagination" && getQueryVariable("page")) {
    globalPage = parseInt(getQueryVariable("page"))
  }
  const [, getObjs] = useFetch(
    (arg?: {
      path: string
      index?: number
      size?: number
      force?: boolean
    }) => {
      const page = {
        index: arg?.index,
        size: arg?.size,
      }
      // setSearchParams(page);
      return fsList(
        arg?.path,
        password(),
        page.index,
        page.size,
        arg?.force,
        new axios.CancelToken((c) => {
          cancelList = c
        }),
      )
    },
  )
  // set a path must be a dir
  const setPathAs = (path: string, dir = true, push = false) => {
    if (push) {
      path = pathJoin(pathname(), path)
    }
    if (dir) {
      IsDirRecord[path] = true
    } else {
      delete IsDirRecord[path]
    }
  }

  // record is second time password is wrong
  let retry_pass = false
  // handle pathname change
  // if confirm current path is dir, fetch List directly
  // if not, fetch get then determine if it is dir or file
  const handlePathChange = (path: string, rp?: boolean, force?: boolean) => {
    log(`handle [${path}] change`)
    cancelObj?.()
    cancelList?.()
    retry_pass = rp ?? false
    handleErr("")
    if (hasHistory(path)) {
      return recoverHistory(path)
    } else if (IsDirRecord[path]) {
      return handleFolder(path, globalPage, undefined, undefined, force)
    } else {
      return handleObj(path)
    }
  }

  // handle enter obj that don't know if it is dir or file
  const handleObj = async (path: string) => {
    ObjStore.setState(State.FetchingObj)
    const resp = await getObj(path)
    handleRespWithoutNotify(
      resp,
      (data) => {
        ObjStore.setObj(data)
        ObjStore.setProvider(data.provider)
        if (data.is_dir) {
          setPathAs(path)
          handleFolder(path, globalPage)
        } else {
          ObjStore.setReadme(data.readme)
          ObjStore.setHeader(data.header)
          ObjStore.setRelated(data.related ?? [])
          ObjStore.setRawUrl(data.raw_url)
          ObjStore.setState(State.File)
        }
      },
      handleErr,
    )
  }

  // change enter a folder or turn page or load more
  const handleFolder = async (
    path: string,
    index?: number,
    size?: number,
    append = false,
    force?: boolean,
  ) => {
    if (!size) {
      size = pagination.size
    }
    if (size !== undefined && pagination.type === "all") {
      size = undefined
    }
    ObjStore.setState(append ? State.FetchingMore : State.FetchingObjs)
    const resp = await getObjs({ path, index, size, force })
    handleRespWithoutNotify(
      resp,
      (data) => {
        globalPage = index ?? 1
        if (append) {
          appendObjs(data.content)
        } else {
          ObjStore.setObjs(data.content ?? [])
          ObjStore.setTotal(data.total)
        }
        ObjStore.setReadme(data.readme)
        ObjStore.setHeader(data.header)
        ObjStore.setWrite(data.write)
        ObjStore.setProvider(data.provider)
        ObjStore.setState(State.Folder)
      },
      handleErr,
    )
  }

  const handleErr = (msg: string, code?: number) => {
    if (code === 403) {
      ObjStore.setState(State.NeedPassword)
      if (retry_pass) {
        notify.error(msg)
      }
    } else {
      if (first_fetch && msg.endsWith("object not found")) {
        first_fetch = false
        to(pathname().replace(me().base_path, ""))
        return
      }
      if (code === undefined || code >= 0) {
        ObjStore.setErr(msg)
      }
    }
  }
  const pageChange = (index?: number, size?: number, append = false) => {
    return handleFolder(pathname(), index, size, append)
  }
  const loadMore = () => {
    return pageChange(globalPage + 1, undefined, true)
  }
  return {
    handlePathChange: handlePathChange,
    setPathAs: setPathAs,
    refresh: async (retry_pass?: boolean, force?: boolean) => {
      const path = pathname()
      const scroll = window.scrollY
      clearHistory(path)
      if (
        pagination.type === "load_more" ||
        pagination.type === "auto_load_more"
      ) {
        const page = globalPage
        resetGlobalPage()
        await handlePathChange(path, retry_pass, force)
        while (globalPage < page) {
          await loadMore()
        }
      } else {
        await handlePathChange(path, retry_pass, force)
      }
      window.scroll({ top: scroll, behavior: "smooth" })
    },
    pageChange: pageChange,
    loadMore: loadMore,
    allLoaded: () => globalPage >= Math.ceil(objStore.total / pagination.size),
  }
}
