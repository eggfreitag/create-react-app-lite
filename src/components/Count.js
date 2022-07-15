import React, { useState } from "react";
import styled from "styled-components";

const InitialPage = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((curr) => curr + 1);
  };
  const minus = () => {
    setCount((curr) => curr - 1);
  };

  return (
    <InitialPageStyle>
      <Count>
        <Code>{count}</Code>
      </Count>
      <ButtonWrapper>
        <Button onClick={plus}>+</Button>
        <Button onClick={minus}>-</Button>
      </ButtonWrapper>
    </InitialPageStyle>
  );
};

const InitialPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
  margin: 20px 0px;
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 70px;
`;

const Code = styled.code`
  background-color: rgba(245, 194, 77, 0.7);
  font-size: 40px;
  text-align: center;
  line-height: 70px;
  height: 70px;
  width: 240px;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: rgba(245, 194, 77, 0.7);
  border-radius: 10px;
  border: none;
  width: 80px;
  height: 30px;
  margin: 0px 40px;
`;

export default InitialPage;
