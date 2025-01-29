import {
  Center,
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  SelectContent,
  SelectIcon,
  SelectListbox,
  SelectOption,
  SelectOptionIndicator,
  SelectOptionText,
  SelectPlaceholder,
  SelectTrigger,
  SelectValue,
  VStack,
  Switch as HopeSwitch,
} from "@hope-ui/solid"
import { For, Match, onCleanup, Switch } from "solid-js"
import { useT } from "~/hooks"
import { initialLocalSettings, local, LocalSetting, setLocal } from "~/store"
import { bus } from "~/utils"
import { SwitchLanguageWhite, SwitchColorMode } from "~/components"
import { Icon } from "@hope-ui/solid"
import { notificationService } from "@hope-ui/solid"
import { VsActivateBreakpoints as Auto } from "solid-icons/vs"

function LocalSettingEdit(props: LocalSetting) {
  const t = useT()
  return (
    <FormControl>
      <FormLabel>{t(`home.local_settings.${props.key}`)}</FormLabel>
      <Switch
        fallback={
          <Input
            value={local[props.key]}
            onInput={(e) => {
              setLocal(props.key, e.currentTarget.value)
            }}
          />
        }
      >
        <Match when={props.type === "select"}>
          <Select
            id={props.key}
            defaultValue={local[props.key]}
            onChange={(v) => setLocal(props.key, v)}
          >
            <SelectTrigger>
              <SelectPlaceholder>{t("global.choose")}</SelectPlaceholder>
              <SelectValue />
              <SelectIcon />
            </SelectTrigger>
            <SelectContent>
              <SelectListbox>
                <For
                  each={
                    typeof props.options === "function"
                      ? props.options()
                      : props.options
                  }
                >
                  {(item) => (
                    <SelectOption value={item}>
                      <SelectOptionText>
                        {t(`home.local_settings.${props.key}_options.${item}`)}
                      </SelectOptionText>
                      <SelectOptionIndicator />
                    </SelectOption>
                  )}
                </For>
              </SelectListbox>
            </SelectContent>
          </Select>
        </Match>
        <Match when={props.type === "boolean"}>
          <HopeSwitch
            defaultChecked={local[props.key] === "true"}
            onChange={(e) => {
              setLocal(props.key, e.currentTarget.checked.toString())
            }}
          />
        </Match>
      </Switch>
    </FormControl>
  )
}

export const LocalSettings = () => {
  const { isOpen, onOpen, onClose } = createDisclosure()
  const t = useT()
  const handler = (name: string) => {
    if (name === "local_settings") {
      onOpen()
    }
  }
  bus.on("tool", handler)
  onCleanup(() => {
    bus.off("tool", handler)
  })
  return (
    <Drawer opened={isOpen()} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color="$info9">
          {t("home.toolbar.local_settings")}
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing="$2">
            <For each={initialLocalSettings.filter((s) => !s.hidden)}>
              {(setting) => <LocalSettingEdit {...setting} />}
            </For>
          </VStack>
          <Center mt="$4">
            <HStack spacing="$4" p="$2" color="$neutral11">
              <SwitchColorMode />
              <Icon
                as={Auto}
                cursor="pointer"
                boxSize="$8"
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
  )
}
