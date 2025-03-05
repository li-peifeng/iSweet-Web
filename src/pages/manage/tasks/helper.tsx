import { createSignal, JSX } from "solid-js"
import { me } from "~/store"
import { TaskNameAnalyzer } from "./Tasks"
import { useRouter, useT } from "~/hooks"
import { encodePath } from "~/utils"

export const getPath = (
  device: string,
  path: string,
  asLink: boolean = true,
): JSX.Element => {
  const fullPath = (device === "/" ? "" : device) + path
  const prefix = me().base_path === "/" ? "" : me().base_path
  const accessible = fullPath.startsWith(prefix)
  const [underline, setUnderline] = createSignal(false)
  const { to } = useRouter()
  return accessible && asLink ? (
    <p
      style={underline() ? "text-decoration: underline" : ""}
      onMouseOver={() => setUnderline(true)}
      onMouseOut={() => setUnderline(false)}
      on:click={(_: MouseEvent) => {
        to(encodePath(fullPath.slice(prefix.length)))
      }}
    >
      {fullPath}
    </p>
  ) : (
    <p>{fullPath}</p>
  )
}

export const getOfflineDownloadNameAnalyzer = (): TaskNameAnalyzer => {
  const t = useT()
  const [underline, setUnderline] = createSignal(false)
  return {
    regex: /^download (.+) to \((.+)\)$/,
    title: (matches) => matches[1],
    attrs: {
      [t(`tasks.attr.offline_download.url`)]: (matches) => (
        <a
          style={underline() ? "text-decoration: underline" : ""}
          onMouseOver={() => setUnderline(true)}
          onMouseOut={() => setUnderline(false)}
          href={matches[1]}
          target="_blank"
        >
          {matches[1]}
        </a>
      ),
      [t(`tasks.attr.offline_download.path`)]: (matches) =>
        getPath("", matches[2]),
    },
  }
}

export const getOfflineDownloadTransferNameAnalyzer = (): TaskNameAnalyzer => {
  const t = useT()
  return {
    regex: /^transfer \[(.*)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,
    title: (matches) => matches[3],
    attrs: {
      [t(`tasks.attr.offline_download.transfer_src`)]: (matches) => {
        return matches[1] === "" ? undefined : getPath(matches[1], matches[2])
      },
      [t(`tasks.attr.offline_download.transfer_src_local`)]: (matches) => {
        return matches[1] === "" ? matches[2] : undefined
      },
      [t(`tasks.attr.offline_download.transfer_dst`)]: (matches) =>
        getPath(matches[4], matches[5]),
    },
  }
}

export const getDecompressNameAnalyzer = (): TaskNameAnalyzer => {
  const t = useT()
  return {
    regex:
      /^decompress \[(.+)]\((.*\/([^\/]+))\)\[(.+)] to \[(.+)]\((.+)\) with password <(.*)>$/,
    title: (matches) => matches[3],
    attrs: {
      [t(`tasks.attr.decompress.src`)]: (matches) =>
        getPath(matches[1], matches[2]),
      [t(`tasks.attr.decompress.dst`)]: (matches) =>
        getPath(matches[5], matches[6]),
      [t(`tasks.attr.decompress.inner`)]: (matches) => <p>{matches[4]}</p>,
      [t(`tasks.attr.decompress.password`)]: (matches) => <p>{matches[7]}</p>,
    },
  }
}

export const getDecompressUploadNameAnalyzer = (): TaskNameAnalyzer => {
  const t = useT()
  return {
    regex: /^upload (.+) to \[(.+)]\((.+)\)$/,
    title: (matches) => matches[1],
    attrs: {
      [t(`tasks.attr.decompress.dst`)]: (matches) =>
        getPath(matches[2], matches[3]),
    },
  }
}
