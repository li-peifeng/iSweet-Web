import {
  HStack,
  useColorModeValue,
  Image,
  Center,
  CenterProps,
  IconButton,
} from "@hope-ui/solid"
import { Show, Switch, Match, createMemo } from "solid-js"
import {
  getMainColor,
  layout,
  getSetting,
  local,
  objStore,
  State,
  me,
} from "~/store"
import { changeColor } from "seemly"
import { CenterLoading } from "~/components"
import { Container } from "../Container"
import { bus } from "~/utils"
import { Layout } from "./layout"
import { TbListSearch } from "solid-icons/tb"
import { Link } from "@solidjs/router"
import { UserMethods } from "~/types"
export const Header = () => {
  const logos = getSetting("logo").split("\n")
  const logo = useColorModeValue(logos[0], logos.pop())

  const stickyProps = createMemo<CenterProps>(() => {
    switch (local["position_of_header_navbar"]) {
      case "sticky":
        return { position: "sticky", zIndex: "$sticky", top: 0 }
      default:
        return { position: undefined, zIndex: undefined, top: undefined }
    }
  })

  return (
    <Center
      {...stickyProps}
      bgColor="$background"
      class="header"
      w="$full"
      // shadow="$md"
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2"
          w="$full"
          justifyContent="space-between"
        >
          <HStack
            class="header-left"
            h="48px"
            as={Link}
            href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
          >
            <Image
              src={logo()!}
              h="$full"
              w="auto"
              fallback={<CenterLoading />}
            />
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              <IconButton
                aria-label="Search"
                color={getMainColor()}
                bgColor={changeColor(getMainColor(), { alpha: 0.05 })}
                _hover={{
                  bgColor: changeColor(getMainColor(), { alpha: 0.2 }),
                }}
                compact
                size="lg"
                icon={
                  <Switch>
                    <Match when={layout() === "list"}>
                      <TbListSearch />
                    </Match>
                    <Match when={layout() === "grid"}>
                      <svg
                        fill="none"
                        stroke-width="2"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-device-ipad-horizontal-search"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="overflow: visible; color: currentcolor;"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5"></path>
                        <path d="M9 17h2"></path>
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M20.2 20.2l1.8 1.8"></path>
                      </svg>
                    </Match>
                    <Match when={layout() === "image"}>
                      <svg
                        fill="none"
                        stroke-width="2"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-photo-search"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="overflow: visible; color: currentcolor;"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M15 8h.01"></path>
                        <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path>
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M20.2 20.2l1.8 1.8"></path>
                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"></path>
                      </svg>
                    </Match>
                  </Switch>
                }
                onClick={() => {
                  bus.emit("tool", "search")
                }}
              />
              <Layout />
            </Show>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}
