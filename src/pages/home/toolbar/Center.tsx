import { Box, HStack, useColorModeValue } from "@hope-ui/solid"
import { createMemo, For, Show } from "solid-js"
import {
  checkboxOpen,
  haveSelected,
  objStore,
  selectAll,
  State,
  me,
} from "~/store"
import { CopyLink } from "./CopyLink"
import { CenterIcon } from "./Icon"
import { bus } from "~/utils"
import { Download } from "./Download"
import { Motion, Presence } from "@motionone/solid"
import { UserMethods } from "~/types"

export const Center = () => {
  const show = createMemo(
    () =>
      [State.Folder, State.FetchingMore].includes(objStore.state) &&
      checkboxOpen() &&
      haveSelected(),
  )
  return (
    <Presence exitBeforeEnter>
      <Show when={show() && UserMethods.is_admin(me())}>
        <Box
          class="center-toolbar"
          pos="fixed"
          bottom="$5"
          right="50%"
          w="max-content"
          color="$neutral11"
          as={Motion.div}
          initial={{ opacity: 0, scale: 0, x: "50% ", y: 100 }}
          animate={{ opacity: 1, scale: 1, x: "50%", y: 0 }}
          exit={{ opacity: 0, scale: 0, x: "50% ", y: 100 }}
          // @ts-ignore
          transition={{ duration: 0.2 }}
        >
          <HStack
            p="$2"
            bgColor={useColorModeValue("white", "#000000d0")()}
            spacing="$1"
            shadow="0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
            rounded="$lg"
            css={{
              backdropFilter: "blur(15px)",
            }}
          >
            <For each={["rename", "move", "copy", "delete"]}>
              {(name) => {
                return (
                  <CenterIcon
                    name={name}
                    onClick={() => {
                      bus.emit("tool", name)
                    }}
                  />
                )
              }}
            </For>
            <CopyLink />
            <Download />
            <CenterIcon
              name="cancel_select"
              onClick={() => {
                selectAll(false)
              }}
            />
          </HStack>
        </Box>
      </Show>
    </Presence>
  )
}
