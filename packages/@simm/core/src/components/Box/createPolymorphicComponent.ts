import React from "react";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// This is the type for the "ref" only
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export const createPolymorphicComponent = <
  T extends HTMLElement = HTMLDivElement,
  P = {},
  C extends React.ElementType = "div",
>(
  ui: React.ForwardRefRenderFunction<T, PolymorphicComponentPropWithRef<C> & P>,
) => {
  type ComponentProps<C extends React.ElementType> =
    PolymorphicComponentPropWithRef<C>;
  type _PolymorphicComponent = <C extends React.ElementType>(
    props: ComponentProps<C> & P,
  ) => React.ReactNode;
  const Component = React.forwardRef(ui) as unknown as _PolymorphicComponent;

  return Component;
};
