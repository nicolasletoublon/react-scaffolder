import React from "react";
import { FlexBox } from "../common/Box";
import styled from "styled-components";
import { Header } from "./header/Header";
import { Routing } from "./routing/Routing";

const FullPage = styled(FlexBox)`
  flex-direction: column;

  min-height: 100vh;
`;

const Content = styled(FlexBox)`
  flex: 1;
  flex-direction: column;
`;

function Main() {
  return (
    <FullPage>
      <Header />
      <Content>
        <Routing />
      </Content>
    </FullPage>
  );
}

export default Main;
