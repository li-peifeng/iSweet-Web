import {
  Box,
  Icon,
  Center,
  notificationService,
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from "@hope-ui/solid"
import { TiThMenu } from "solid-icons/ti"
import { IoExit } from "solid-icons/io"
import { SwitchColorMode, SwitchLanguageWhite } from "~/components"
import { useFetch, useRouter, useT } from "~/hooks"
import { SideMenu } from "./SideMenu"
import { side_menu_items } from "./sidemenu_items"
import { changeToken, handleResp, notify, r } from "~/utils"
import { PResp } from "~/types"
import { VsActivateBreakpoints as Auto } from "solid-icons/vs"

const { isOpen, onOpen, onClose } = createDisclosure()
const [logOutReqLoading, logOutReq] = useFetch(
  (): PResp<any> => r.get("/auth/logout"),
)

const Header = () => {
  const t = useT()
  const { to } = useRouter()
  const logOut = async () => {
    handleResp(await logOutReq(), () => {
      changeToken()
      notify.success(t("manage.logout_success"))
      to(`/@login?redirect=${encodeURIComponent(location.pathname)}`)
    })
  }
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="$sticky"
      height="64px"
      flexShrink={0}
      shadow="$md"
      p="$4"
      bgColor={useColorModeValue("$background", "$neutral2")()}
    >
      <Flex alignItems="center" justifyContent="space-between" h="$full">
        <HStack spacing="$2">
          <IconButton
            aria-label="menu"
            icon={<TiThMenu />}
            display={{ "@sm": "none" }}
            onClick={onOpen}
            size="sm"
          />
          <Heading
            fontSize="$xl"
            color="$info9"
            cursor="pointer"
            onClick={() => {
              to("/@manage")
            }}
          >
            {t("manage.title")}
          </Heading>
        </HStack>
        <HStack spacing="$1">
          <IconButton
            aria-label="logout"
            icon={<IoExit />}
            onClick={logOut}
            size="sm"
          />
        </HStack>
      </Flex>
      <Drawer opened={isOpen()} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="$info9">{t("manage.title")}</DrawerHeader>
          <DrawerBody>
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
                      description: t("home.toolbar.local_settings_auto"),
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export { Header, onClose }
