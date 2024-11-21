import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Landing from "@/pages/Landing";

describe("testing Landing Page Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<Landing />);
    const results = await act(async () => axe(container));
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<Landing />);
  expect(container).toMatchSnapshot();
});
