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

export const recordHistory = (path: string) => {
  const obj = JSON.parse(JSON.stringify(objStore))
  if (
    ![State.FetchingMore, State.Folder, State.File].includes(objStore.state)
  ) {
    return
  }
  if (objStore.state === State.FetchingMore) {
    obj.state = State.Folder
  }
  const history = {
    obj,
    page: getGlobalPage(),
    scroll: window.scrollY,
  }
  HistoryMap.set(path, history)
}

export const recoverHistory = async (path: string) => {
  if (!HistoryMap.has(path)) return
  const history = HistoryMap.get(path)!
  setGlobalPage(history.page)
  ObjStore.setState(State.Initial)
  await waitForNextFrame()
  ObjStore.set(history.obj)
  await waitForNextFrame()
  window.scroll({ top: history.scroll, behavior: "smooth" })
}

export const hasHistory = (path: string) => {
  return HistoryMap.has(path)
}

export const clearHistory = (path: string) => {
  HistoryMap.delete(path)
}
