import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Footer from "@/components/Footer";

describe("testing Footer Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
