import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Projects } from "@/constants/Projects";
import DevTools from "@/components/ui/DevTools";

describe("testing DevTools Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(
      <div role="grid">
        <DevTools tools={Projects.HelloDog.icons} />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<DevTools tools={Projects.HelloDog.icons} />);
  expect(container).toMatchSnapshot();
});
