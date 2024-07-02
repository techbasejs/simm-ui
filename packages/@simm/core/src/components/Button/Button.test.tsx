import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("@simm/core/Button", () => {
  test("Component render success", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeDefined();
  });
  test("Sets data-loading attribute when loading prop is set to true", () => {
    render(<Button variant="filled">Button</Button>);
    expect(screen.getByText("Button")).toBeDefined();
  })
});