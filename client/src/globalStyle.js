import { createGlobalStyle } from "styled-components";

import interRegularW from "./assets/fonts/Inter-Regular.woff";
import semiBoldW from "./assets/fonts/Inter-SemiBold.woff";
import interBoldW from "./assets/fonts/Inter-Bold.woff";

import interRegularW2 from "./assets/fonts/Inter-Regular.woff2";
import semiBoldW2 from "./assets/fonts/Inter-SemiBold.woff2";
import interBoldW2 from "./assets/fonts/Inter-Bold.woff2";

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  background-color: #242426;
  margin: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont; sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'zero' 1

  @font-face {
    font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
}
  }`;
