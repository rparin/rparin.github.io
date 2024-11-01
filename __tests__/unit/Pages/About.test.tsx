import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { NavItems } from "@/constants/NavLinks";
import About from "@/pages/About";

describe("testing About Page Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<About id={NavItems.about.id} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<About id={NavItems.about.id} />);
  expect(container).toMatchSnapshot();
});
