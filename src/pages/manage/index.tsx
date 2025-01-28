import {
  Icon,
  notificationService,
  Box,
  Center,
  Flex,
  HStack,
  useColorModeValue,
} from "@hope-ui/solid"
import { SwitchColorMode, SwitchLanguageWhite } from "~/components"
import { useT, useTitle } from "~/hooks"
import { Header } from "./Header"
import { SideMenu } from "./SideMenu"
import { side_menu_items } from "./sidemenu_items"
import { Route, Routes } from "@solidjs/router"
import { For } from "solid-js"
import { routes } from "./routes"
import { VsActivateBreakpoints as Auto } from "solid-icons/vs"

const Manage = () => {
  const t = useT()
  useTitle(() => t("manage.title"))
  return (
    <Box
      css={{
        "--hope-colors-background": "var(--hope-colors-loContrast)",
      }}
      bgColor="$background"
      w="$full"
    >
      <Header />
      <Flex w="$full" h="calc(100vh - 64px)">
        <Box
          display={{ "@initial": "none", "@sm": "block" }}
          w="$56"
          h="$full"
          shadow="$md"
          bgColor={useColorModeValue("$background", "$neutral2")()}
          overflowY="auto"
        >
          <SideMenu items={side_menu_items} />
          <Center>
            <HStack spacing="$4" p="$2" color="$neutral11">
              <SwitchColorMode />
              <Icon
                as={Auto}
                cursor="pointer"
                boxSize="$7"
                onClick={() => {
                  localStorage.removeItem("hope-ui-color-mode")
                  notificationService.show({
                    status: "success",
                    description: "设置成功，即将自动刷新",
                    closable: false,
                  })
                  setTimeout(function () {
                    location.reload()
                  }, 2500)
                }}
              />
              <SwitchLanguageWhite />
            </HStack>
          </Center>
        </Box>
        <Box
          w={{
            "@initial": "$full",
            "@sm": "calc(100% - 14rem)",
          }}
          p="$4"
          overflowY="auto"
        >
          <Routes>
            <For each={routes}>
              {(route) => {
                return <Route path={route.to!} component={route.component} />
              }}
            </For>
          </Routes>
        </Box>
      </Flex>
    </Box>
  )
}

export default Manage
