import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@hope-ui/solid"
import { usePath, useRouter, useT } from "~/hooks"
import { password, setPassword } from "~/store"
import { Link } from "@solidjs/router"

const Password = () => {
  const t = useT()
  const { refresh } = usePath()
  const { back } = useRouter()
  return (
    <VStack
      w={{
        "@initial": "$full",
        "@md": "$lg",
      }}
      p="$8"
      spacing="$3"
      alignItems="start"
    >
      <Heading>{t("home.input_password")}</Heading>
      <Input
        type="password"
        value={password()}
        background={useColorModeValue("$neutral3", "$neutral2")()}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            refresh(true)
          }
        }}
        onInput={(e) => setPassword(e.currentTarget.value)}
      />
      <HStack w="$full" justifyContent="space-between">
        <Flex
          fontSize="$sm"
          color="$neutral10"
          direction={{ "@initial": "column", "@sm": "row" }}
          columnGap="$1"
        >
          <Text color="$info9" as={Link} href={`https://peifeng.li/password`}>
            获取授权
          </Text>
        </Flex>
        <HStack spacing="$2">
          <Button colorScheme="neutral" onClick={back}>
            {t("global.back")}
          </Button>
          <Button onClick={() => refresh(true)}>{t("global.ok")}</Button>
        </HStack>
      </HStack>
    </VStack>
  )
}
export default Password
