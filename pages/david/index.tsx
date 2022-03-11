import React from "react";
import {
    Box,
  Center,
  useColorMode,
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
} from "native-base";
import { StyleSheet, View, ViewStyle, TextStyle, ImageStyle, FlexAlignType } from "react-native";

// Start editing here, save and see your changes.
export default function David() {
  return (
    <Box>
        <Image 
            width={`100%`} 
            height={`80vh`} 
            resizeMode="cover"
            src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600"
        />
        <Box style={styles.heroHeaderContainer}>
            <Text fontSize={`9xl`}>RAPTORS!!!</Text>
        </Box>
        <HStack>
            <Text color={`primary.400`}>David Test</Text>
            <Text color={`primary.500`}>David Test</Text>
            <Text color={`primary.600`}>David Test</Text>
            <Text color={`primary.700`}>David Test</Text>
            <Text>David Test</Text>
            <Text>David Test</Text>
        </HStack>
        <VStack>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
            <Text>DAVID V</Text>
        </VStack>
      {/* <ColorModeSwitch /> */}
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
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}

interface Styles {
    // button: ViewStyle;
    // icon: ImageStyle;
    // label: TextStyle;
    heroContainer: ViewStyle,
    heroHeaderContainer: ViewStyle,
    heroHeaderText: TextStyle,
  }

  
const styles = StyleSheet.create<Styles>({
    heroContainer: {
      position: "relative"
    },
    heroHeaderContainer: {
      left: 0,
      top: 0,
      right: 0,
      bottom: "25%",
      position: "absolute",
      alignItems: "start" as FlexAlignType,
      justifyContent: "center",
      marginLeft: 50
    },
    heroHeaderText: {
      fontSize: 50,
      color: "white",
      textTransform: "uppercase"
    }
  });