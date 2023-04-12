import React from "react";
import styled from "styled-components";

const StyledCartList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
`;
const CardList = (props) => {
  return <StyledCartList>{props.children}</StyledCartList>;
};

export default CardList;
