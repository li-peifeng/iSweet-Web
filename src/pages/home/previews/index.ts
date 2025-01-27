import { Component, lazy } from "solid-js"
import { getIframePreviews, me } from "~/store"
import { Obj, ObjType, UserMethods, UserPermissions } from "~/types"
import { ext } from "~/utils"
import { generateIframePreview } from "./iframe"
import { useRouter } from "~/hooks"
import { getArchiveExtensions } from "~/store/archive"

type Ext = string[] | "*" | (() => string[])

const extsContains = (exts: Ext | undefined, ext: string): boolean => {
  if (exts === undefined) {
    return false
  } else if (exts === "*") {
    return true
  } else if (typeof exts === "function") {
    return (exts as () => string[])().includes(ext)
  } else {
    return (exts as string[]).includes(ext)
  }
}

export interface Preview {
  name: string
  type?: ObjType
  exts?: Ext
  provider?: RegExp
  component: Component
}

export type PreviewComponent = Pick<Preview, "name" | "component">

const previews: Preview[] = [
  {
    name: "HTML网页",
    exts: ["html"],
    component: lazy(() => import("./html")),
  },
  {
    name: "在线阿里网盘视频",
    type: ObjType.VIDEO,
    provider: /^Aliyundrive(Open)?$/,
    component: lazy(() => import("./aliyun_video")),
  },
  {
    name: "Markdown文档",
    type: ObjType.TEXT,
    component: lazy(() => import("./markdown")),
  },
  {
    name: "Markdown自动换行",
    type: ObjType.TEXT,
    component: lazy(() => import("./markdown_with_word_wrap")),
  },
  {
    name: "URL网址",
    exts: ["url"],
    component: lazy(() => import("./url")),
  },
  {
    name: "TXT文档",
    type: ObjType.TEXT,
    exts: ["url"],
    component: lazy(() => import("./text-editor")),
  },
  {
    name: "在线查看图片",
    type: ObjType.IMAGE,
    component: lazy(() => import("./image")),
  },
  {
    name: "在线播放视频",
    type: ObjType.VIDEO,
    component: lazy(() => import("./video")),
  },
  {
    name: "在线播放音频",
    type: ObjType.AUDIO,
    component: lazy(() => import("./audio")),
  },
  {
    name: "IPA安装及下载",
    exts: ["ipa", "tipa"],
    component: lazy(() => import("./ipa")),
  },
  {
    name: "PLIST",
    exts: ["plist"],
    component: lazy(() => import("./plist")),
  },
  {
    name: "办公文档",
    exts: ["doc", "docx", "ppt", "pptx", "xls", "xlsx", "pdf"],
    provider: /^Aliyundrive(Share)?$/,
    component: lazy(() => import("./aliyun_office")),
  },
  {
    name: "录屏",
    exts: ["cast"],
    component: lazy(() => import("./asciinema")),
  },
  {
    name: "压缩文档",
    exts: () => {
      const index = UserPermissions.findIndex(
        (item) => item === "read_archives",
      )
      if (!UserMethods.can(me(), index)) return []
      return getArchiveExtensions()
    },
    component: lazy(() => import("./archive")),
  },
]

export const getPreviews = (
  file: Obj & { provider: string },
): PreviewComponent[] => {
  const { searchParams } = useRouter()
  const typeOverride =
    ObjType[searchParams["type"]?.toUpperCase() as keyof typeof ObjType]
  const res: PreviewComponent[] = []
  // internal previews
  previews.forEach((preview) => {
    if (preview.provider && !preview.provider.test(file.provider)) {
      return
    }
    if (
      preview.type === file.type ||
      (typeOverride && preview.type === typeOverride) ||
      extsContains(preview.exts, ext(file.name).toLowerCase())
    ) {
      res.push({ name: preview.name, component: preview.component })
    }
  })
  // iframe previews
  const iframePreviews = getIframePreviews(file.name)
  iframePreviews.forEach((preview) => {
    res.push({
      name: preview.key,
      component: generateIframePreview(preview.value),
    })
  })
  // download page
  res.push({
    name: "下载保存",
    component: lazy(() => import("./download")),
  })
  return res
}
