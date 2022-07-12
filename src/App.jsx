import React from "react";
import styled from "styled-components";

import logo from "./logo.png";

const App = () => {
  return (
    <Content>
      <Logo src={logo} className="App-logo" alt="icon" />
      <p>
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank">
        Learn React
      </a>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  width: 400px;
  height: 400px;
`;

export default App;
