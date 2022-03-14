import React from "react";
import {
  Box,
  Image,
  HStack,
  Text,
  VStack,
  FlatList,
  Heading,
} from "native-base";
import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlexAlignType,
} from "react-native";
import Header from "../../components/Header";
import axios from "axios";

export default function David(props: any) {
  const posts: any = props.posts;
  console.log("POSTS >>> ", posts);
  return (
    <Box>
      <Header />
      <Image
        width={`100%`}
        height={`80vh`}
        resizeMode="cover"
        src="https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600"
      />
      <Box style={styles.heroHeaderContainer}>
        <Text fontSize={`9xl`}>RAPTORS!!!</Text>
      </Box>
      <Box
        _dark={{
          bg: "gray.600",
        }}
      >
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
        </VStack>
        <FlatList
          data={posts}
          renderItem={({ item }: { item: any }) => {
            return (
              <Box>
                <Heading>{item.title}</Heading>
                <Text>{item.body}</Text>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
}

interface Styles {
  heroContainer: ViewStyle;
  heroHeaderContainer: ViewStyle;
  heroHeaderText: TextStyle;
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
