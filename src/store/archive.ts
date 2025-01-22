import { ext } from "~/utils"

let archiveExtensions: string[] = []

export const setArchiveExtensions = (extensions: string[]) => {
  archiveExtensions = extensions
}

export const getArchiveExtensions = () => archiveExtensions

export const isArchive = (name: string) => {
  return archiveExtensions.indexOf(ext(name).toLowerCase()) !== -1
}
