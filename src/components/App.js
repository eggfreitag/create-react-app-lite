import React from "react";
import styled, { keyframes } from "styled-components";

import Count from "./Count";
import logo from "../assets/logo.png";

const App = () => {
  return (
    <Content>
      <Count />
      <Spinner>
        <Logo src={logo} className="App-logo" alt="icon" />
      </Spinner>
      <Code>Edit "src/components/App.js" and save to reload.</Code>
      <Code>
        <A href="https://reactjs.org" target="_blank">
          Learn React.......
        </A>
      </Code>
    </Content>
  );
};
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  background-color: rgba(245, 194, 77, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 400px;
  height: 400px;
  margin: 10px 0px;
  animation-name: ${spin};
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Logo = styled.img`
  width: 400px;
  height: 400px;
  margin: 10px 0px;
`;

const Code = styled.code`
  height: 15px;
  line-height: 15px;
  font-size: 14px;
  margin: 20px 0px;
`;

const A = styled.a`
  &:visited {
    color: black;
  }
`;

export default App;
