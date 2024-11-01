import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

describe("testing ThemeToggle Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<ThemeToggle />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<ThemeToggle />);
  expect(container).toMatchSnapshot();
});
