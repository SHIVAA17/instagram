import { Flex, Image ,Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Flex>
    <Image src="./google.png" w={5} alt="Google Logo" />
    <Text mx="2" color={"blue.500"}>
      Log in With Google
    </Text>
  </Flex>
  )
}

export default GoogleAuth