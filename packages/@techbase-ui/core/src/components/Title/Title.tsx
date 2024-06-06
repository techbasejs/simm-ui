import styled from "@emotion/styled";
import React from "react";

interface TitleProps {
  children?: React.ReactNode;
}

const TitleStyled = styled.h4(() => ({
  margin: 0,
  fontSize: 16,
}));

const Title = React.forwardRef(function Title({ children }: TitleProps) {
  return <TitleStyled>{children}</TitleStyled>;
});

export default Title;
