import { extendTheme } from 'native-base';
export const theme = extendTheme({
    colors: {
      // Add new color
      // primary: {
      //   50: '#E3F2F9',
      //   100: '#C5E4F3',
      //   200: '#A2D4EC',
      //   300: '#7AC1E4',
      //   400: '#47A9DA',
      //   500: '#0088CC',
      //   600: '#007AB8',
      //   700: '#006BA1',
      //   800: '#005885',
      //   900: '#003F5E',
      // },
      oandaGray: {
        50:'#fafafa'
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    // fontConfig: {},
    // Button: {},
    // Heading: {
    //     baseStyle: (props: any) => {
    //       return {
    //         color: themeTools.mode("red.300", "blue.300")(props),
    //       };
    //     },
    //   },
    // breakpoints: {},
    config: {
      // Changing initialColorMode to 'dark'
      // initialColorMode: 'dark',
    },
  });

// import React from 'react';
// import { NativeBaseProvider, extendTheme } from 'native-base';
// import { Content } from './Content';

// export default function () {
//   const theme = extendTheme({
//     colors: {
//       // Add new color
//       primary: {
//         50: '#E3F2F9',
//         100: '#C5E4F3',
//         200: '#A2D4EC',
//         300: '#7AC1E4',
//         400: '#47A9DA',
//         500: '#0088CC',
//         600: '#007AB8',
//         700: '#006BA1',
//         800: '#005885',
//         900: '#003F5E',
//       },
//       // Redefinig only one shade, rest of the color will remain same.
//       amber: {
//         400: '#d97706',
//       },
//     },
//     config: {
//       // Changing initialColorMode to 'dark'
//       initialColorMode: 'dark',
//     },
//   });

//   return (
//     <NativeBaseProvider theme={theme}>
//       <Content />
//     </NativeBaseProvider>
//   );
// }