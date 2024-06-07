import React from "react";
import { PolymorphicComponentPropWithRef } from "./createPolymorphicComponent";
import styled, { CSSObject } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { useRouter } from "next/navigation";

export type BoxExtraProps = {
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  my?: number | string;
  mx?: number | string;
  m?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  py?: number | string;
  px?: number | string;
  p?: number | string;
  sx?: CSSObject;
};

export type BoxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C> & BoxExtraProps;

type BoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>,
) => React.ReactNode;

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>["ref"]
  : never;

const DynamicComponentStyled = styled(
  ({ as: T = "div", ...props }) => <T {...props} />,
  {
    shouldForwardProp: isPropValid,
  },
);

const BoxExtraStyled = DynamicComponentStyled<{
  cssObject: CSSObject;
}>((props) => {
  return {
    ...props.cssObject,
  };
});

const BoxExtraComponent = React.memo(
  React.forwardRef(function BoxRoot<C extends React.ElementType>(
    props: BoxProps<C>,
    ref: PolymorphicRef<C>,
  ) {
    const {
      mt,
      mr,
      mb,
      ml,
      my,
      mx,
      m,
      pt,
      pr,
      pb,
      pl,
      py,
      px,
      p,
      sx,
      as,
      children,
      ...rest
    } = props;
    const Element = as || "div";

    const css: CSSObject = {
      ...(mt && {
        marginTop: mt,
      }),
      ...(mr && {
        marginRight: mr,
      }),
      ...(mb && {
        marginBottom: mb,
      }),
      ...(ml && {
        marginLeft: ml,
      }),
      ...(my && {
        marginTop: my,
        marginBottom: my,
      }),
      ...(mx && {
        marginLeft: mx,
        marginRight: mx,
      }),
      ...(m && {
        margin: m,
      }),
      ...(pt && {
        paddingTop: pt,
      }),
      ...(pr && {
        paddingRight: pr,
      }),
      ...(pb && {
        paddingBottom: pb,
      }),
      ...(pl && {
        paddingLeft: pl,
      }),
      ...(py && {
        paddingTop: py,
        paddingBottom: py,
      }),
      ...(px && {
        paddingLeft: px,
        paddingRight: px,
      }),
      ...(p && {
        padding: p,
      }),
      ...(sx || {}),
    };

    return (
      <BoxExtraStyled
        as={Element as string}
        cssObject={css}
        ref={ref}
        {...rest}
      >
        {children}
      </BoxExtraStyled>
    );
  }),
);

export const Box: BoxComponent = React.forwardRef(
  <C extends React.ElementType = "div">(
    { as, children, ...rest }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <BoxExtraComponent ref={ref} as={as} {...rest}>
        {children}
      </BoxExtraComponent>
    );
  },
);
