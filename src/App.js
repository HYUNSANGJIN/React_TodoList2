import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

const GlobalStyle = createGlobalStyle`
body{
  background : #e0e1e2;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;