import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { NavItems } from "@/constants/NavLinks";
import Contact from "@/pages/Contact";

describe("testing Contact Page Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<Contact id={NavItems.contact.id} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<Contact id={NavItems.contact.id} />);
  expect(container).toMatchSnapshot();
});
