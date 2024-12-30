import { Show, createSignal, onCleanup } from "solid-js"
import { Box, Icon } from "@hope-ui/solid"
import { Motion } from "@motionone/solid"
import { getMainColor } from "~/store"
import { CgChevronDoubleUpO } from "solid-icons/cg"

export const useScrollListener = (
  callback: (e?: Event) => void,
  options?: { immediate?: boolean },
) => {
  if (options?.immediate) callback()
  window.addEventListener("scroll", callback, { passive: true })
  onCleanup(() => window.removeEventListener("scroll", callback))
}

export const BackTop = () => {
  //if (isMobile) return null

  const [visible, setVisible] = createSignal(false)

  useScrollListener(() => setVisible(window.scrollY > 100))

  return (
    <Show when={visible()}>
      <Box
        as={Motion.div}
        initial={{ y: 999 }}
        animate={{ y: 0 }}
        zIndex="$overlay"
        pos="fixed"
        left="$5"
        bottom="$5"
        borderRadius="10px"
        bgColor="#ffffff00"
        color={getMainColor()}
        overflow="hidden"
        shadow="$lg"
        _dark={{ bgColor: "#00000000", color: getMainColor() }}
        _hover={{ bgColor: getMainColor(), color: "$whiteAlpha12" }}
      >
        <Icon
          _focus={{
            outline: "none",
          }}
          cursor="pointer"
          boxSize="$8"
          p="$1"
          rounded="$lg"
          as={CgChevronDoubleUpO}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      </Box>
    </Show>
  )
}
