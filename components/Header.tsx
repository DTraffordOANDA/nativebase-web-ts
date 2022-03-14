import * as React from "react";
import {
  Box,
  Center,
  useColorMode,
  useColorModeValue,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Code,
  Link,
  VStack,
  Button,
  AspectRatio,
  Select,
  Flex,
} from "native-base";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const [lang, setLang] = React.useState<string>("en");
  return (
    <Box
      bgColor={`gray.900`}
      bg={useColorModeValue("gray.50", "gray.900")}
      height={70}
      zIndex={20}
    >
      <Flex justify="space-between" direction="row">
        <HStack>
          <Link
            href="/"
            isUnderlined={false}
            _hover={{
              _text: {
                fontWeight: 900,
              },
            }}
          >
            <Center>
              <Flex alignItems="center">
                <Image
                  src="https://seekvectorlogo.net/wp-content/uploads/2018/12/oanda-vector-logo.png"
                  width={200}
                  height={60}
                />
              </Flex>
            </Center>
          </Link>
        </HStack>
        <HStack marginRight={10}>
          <Center size="16">TEST2</Center>
          <Center>
            <Select
              selectedValue={lang}
              accessibilityLabel="Language"
              placeholder="Language"
              onValueChange={(e) => setLang(e)}
            >
              <Select.Item label="EN" value="en" />
              <Select.Item label="FR" value="fr" />
            </Select>
          </Center>

          <Link href={`/`}>
            <Center size="16">
              <Button>HOME</Button>
            </Center>
          </Link>
          <Center>
            <ColorModeSwitch />
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
}

// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        // position="absolute"
        // top={12}
        // right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
