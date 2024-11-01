import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Navbar from "@/components/ui/Navbar";

describe("testing Navbar Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<Navbar />);
    const results = await act(async () => axe(container));
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
