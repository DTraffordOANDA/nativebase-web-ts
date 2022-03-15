import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  FlatList,
  Heading,
  NativeBaseProvider,
  Stack,
  StorageManager,
  ColorMode
} from "native-base";

import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from "react-native";
import Header from "../../components/Header";
import axios from "axios";
import { theme } from '../../theme/theme';


const colorModeManager: StorageManager = {
  get: async () => {
    let val = localStorage.getItem("@color-mode");
    return val === "dark" ? "dark" : "light";
  },
  set: async (value: ColorMode) => {
    let strValue = value ? value.toString() : "";
    localStorage.setItem("@color-mode", strValue);
  }
};

export default function David(props: any) {
  const posts: any = props.posts;
  console.log("POSTS >>> ", posts);
  // const color = await colorModeManager.get()
  // console.log(color)
  return (
    <NativeBaseProvider colorModeManager={colorModeManager}>
    <Box>
      <Header />
      <Image
        width={`100%`}
        height={`80vh`}
        resizeMode="cover"
        src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600"
      />
      <Box  style={styles.heroHeaderContainer}>
        <Text fontSize={`9xl`}>RAPTORS!!!</Text>
      </Box>
      <Box
        _dark={{
          bg: "gray.600",
          color:'black'
        }}
      >
        <Box mb="2" style={styles.boxContainer}>
            <Heading mt="10" mb="3">POSTS</Heading>
        </Box>
        <FlatList
          data={posts}
          renderItem={({ item }: { item: any }) => {
            return(
            <VStack space="25.5" mt="3" px="8" >
              <Stack pl="24.5" pb="2.5" mb="2.5" mt="1.5" direction="column" space={2} borderRadius="10"
              _light={{bg:theme.colors.muted[100]}}
              // _light={{bg:theme.colors.oandaGray[50]}}
              _dark={{bg:theme.colors.teal[50] }}
              >
              <Heading size="md" pt="4"
              _light={{color:'primary.900'}}
              _dark={{color:'light.900'}}
              >{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</Heading>
                <Text
                _light={{color:'primary.900'}}
                _dark={{color:'light.900'}}
                >
                  {item.body.charAt(0).toUpperCase() + item.body.slice(1)}
                </Text>
              </Stack>
            </VStack>
            )
          }}
        />
      </Box>
    </Box>
    </NativeBaseProvider>
  );
}

interface Styles {
  heroContainer: ViewStyle;
  heroHeaderContainer: ViewStyle;
  heroHeaderText: TextStyle;
  boxContainer:ViewStyle
}

const styles = StyleSheet.create<Styles>({
  heroContainer: {
    position: "relative",
  },
  heroHeaderContainer: {
    left: 0,
    top: 300,
    right: 0,
    position: "absolute",
    alignItems: "start" as FlexAlignType,
    justifyContent: "center",
    marginLeft: 50,
  },
  heroHeaderText: {
    fontSize: 50,
    color: "white",
    textTransform: "uppercase",
  },
  boxContainer:{
    margin:'auto',
    borderBottomColor:theme.colors.primary[200],
    borderBottomWidth:3
  }
});

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("RESPONSE >> ", response.data);
  const posts = response.data;
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
