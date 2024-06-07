import React, { ForwardRefExoticComponent } from "react";

export function createGroupComponent<T, C, P>(
  ui: React.ForwardRefRenderFunction<C, P>,
) {
  const component = ui;

  type GroupType = typeof component & T;

  const Component = React.forwardRef(ui) as unknown as GroupType;

  return Component;
}
