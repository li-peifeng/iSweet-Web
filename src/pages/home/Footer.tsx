import { VStack } from "@hope-ui/solid"
import { useT } from "~/hooks"

export const Footer = () => {
  const t = useT()
  return <VStack class="footer" w="$full" py="$4"></VStack>
}
