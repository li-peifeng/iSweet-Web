import { ObjStore, objStore, State } from "~/store/obj"
import { getGlobalPage, setGlobalPage } from "~/hooks"

interface History {
  obj: object
  page: number
  scroll: number
}

export const HistoryMap = new Map<string, History>()

const waitForNextFrame = () => {
  return new Promise((resolve) => setTimeout(resolve))
}

export const getHistoryKey = (path: string, page?: number) => {
  return page && page > 1 ? `${path}?page=${page}` : path
}

export const recordHistory = (path: string, page?: number) => {
  const obj = JSON.parse(JSON.stringify(objStore))
  if (
    ![State.FetchingMore, State.Folder, State.File].includes(objStore.state)
  ) {
    return
  }
  if (objStore.state === State.FetchingMore) {
    obj.state = State.Folder
  }
  const key = getHistoryKey(path, page)
  const history = {
    obj,
    page: page ?? getGlobalPage(),
    scroll: window.scrollY,
  }
  console.log(`record history: [${key}]`)
  HistoryMap.set(key, history)
}

export const recoverHistory = async (path: string, page?: number) => {
  const key = getHistoryKey(path, page)
  if (!HistoryMap.has(key)) return
  const history = HistoryMap.get(key)!
  setGlobalPage(history.page)
  ObjStore.setState(State.Initial)
  await waitForNextFrame()
  ObjStore.set(history.obj)
  await waitForNextFrame()
  window.scroll({ top: history.scroll, behavior: "smooth" })
}

export const hasHistory = (path: string, page?: number) => {
  const key = getHistoryKey(path, page)
  return HistoryMap.has(key)
}

export const clearHistory = (path: string, page?: number) => {
  const key = getHistoryKey(path, page)
  HistoryMap.delete(key)
}
