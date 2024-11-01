import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import LandingAbout from "@/components/LandingAbout";

describe("testing LandingAbout Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<LandingAbout />);
    const results = await act(async () => axe(container));
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<LandingAbout />);
  expect(container).toMatchSnapshot();
});
