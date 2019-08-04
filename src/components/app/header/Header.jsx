import { FlexBox } from "../../common/Box";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const HeaderWrapper = styled(FlexBox)`
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 4px 0 black;
`;

const Header = () => {
  return (
    <nav>
      <HeaderWrapper px={5}>
        <Link to="/">Dashboard</Link>
        <Link to="/graphql/">GraphQL</Link>
      </HeaderWrapper>
    </nav>
  );
};

export { Header };