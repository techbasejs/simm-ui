import styled from "@emotion/styled";
import { BaseComponentProps, ColorType } from "../../types/types";
import { getColor } from "../../utils/color";

export interface TextProps extends BaseComponentProps {
  color?: ColorType;
}

const TextStyled = styled.p<TextProps>((props) => {
  const color = getColor(props.color || "primary");
  return {
    margin: 0,
    color: color,
  };
});

const Text = ({ children, ...rest }: TextProps) => {
  return <TextStyled {...rest}>{children}</TextStyled>;
};

export default Text;
