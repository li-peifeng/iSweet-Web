import {
  Button,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@hope-ui/solid"
import { useCopyLink, useT } from "~/hooks"
import { objStore } from "~/store"
import { FileInfo } from "./info"
import { OpenWith } from "../file/open-with"
import { createSignal, Show } from "solid-js"
import { BsQrCode } from "solid-icons/bs"
import QRCode from "qrcode"

export const Download = (props: { openWith?: boolean }) => {
  const t = useT()
  const { copyCurrentRawLink } = useCopyLink()
  const [qrUrl, setQrUrl] = createSignal("")
  QRCode.toDataURL(objStore.raw_url, {
    type: "image/jpeg",
    scale: 2,
  }).then((url) => setQrUrl(url))
  const [pinned, setPinned] = createSignal(false)
  const [hover, setHover] = createSignal(false)
  return (
    <FileInfo>
      <HStack spacing="$2">
        <Button colorScheme="accent" onClick={() => copyCurrentRawLink(true)}>
          {t("home.toolbar.copy_link")}
        </Button>
        <Popover opened={pinned() || hover()} motionPreset="none">
          <PopoverTrigger
            as={IconButton}
            icon={<BsQrCode />}
            aria-label="QRCode"
            colorScheme="warning"
            onClick={() => {
              setPinned(!pinned())
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
          <PopoverContent width="fit-content">
            <PopoverArrow />
            <PopoverBody>
              <Image
                maxWidth="156px"
                src={qrUrl()}
                alt="QR.Code 链接二维码"
                objectFit="cover"
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button as="a" href={objStore.raw_url} target="_blank">
          {t("home.preview.download")}
        </Button>
      </HStack>
      <Show when={props.openWith}>
        <OpenWith />
      </Show>
    </FileInfo>
  )
}

export default Download
