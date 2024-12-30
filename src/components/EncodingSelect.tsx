import { Box } from "@hope-ui/solid"
import { SelectWrapper } from "./Base"
import chardet from "chardet"
import { createEffect } from "solid-js"

export function EncodingSelect(props: {
  encoding: string
  setEncoding: (encoding: string) => void
  referenceText?: string | ArrayBuffer
}) {
  const encodingLabels = [
    "utf-8",
    "gbk",
    "gb18030",
    "macintosh",
    "big5",
    "utf-16be",
    "utf-16le",
  ]

  createEffect(() => {
    if (props.referenceText) {
      let buffer: Uint8Array
      if (typeof props.referenceText === "string") {
        buffer = new TextEncoder().encode(props.referenceText)
      } else {
        buffer = new Uint8Array(props.referenceText)
      }
      for (let encoding of chardet.analyse(buffer)) {
        const encodingLabel = encoding.name.toLowerCase()
        if (encodingLabels.includes(encodingLabel)) {
          props.setEncoding(encodingLabel)
          return
        }
      }
    }
  })

  return (
    <Box
      pos="absolute"
      right={0}
      top={0}
      w="$36"
      opacity={0.15}
      _hover={{
        opacity: 1,
      }}
      zIndex={1}
    >
      <SelectWrapper
        options={encodingLabels.map((label) => ({
          label: label.toLocaleUpperCase(),
          value: label,
        }))}
        value={props.encoding}
        onChange={(v) => props.setEncoding(v)}
      />
    </Box>
  )
}
