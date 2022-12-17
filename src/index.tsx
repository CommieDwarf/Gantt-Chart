import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e2f1ff;
  }
  :root {
    --golden: #d8a31a;
    --darkBlue: #00284e;
    --lightBlue: #e2f1ff;
  }
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
