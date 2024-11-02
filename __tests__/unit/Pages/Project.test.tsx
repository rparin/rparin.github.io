import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { NavItems } from "@/constants/NavLinks";
import Project from "@/pages/Project";

describe("testing Project Page Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<Project id={NavItems.projects.id} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<Project id={NavItems.projects.id} />);
  expect(container).not.toMatchSnapshot();
});
