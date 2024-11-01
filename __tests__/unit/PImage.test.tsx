import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Projects } from "@/constants/Projects";
import PImage from "@/components/PImage";
import { Github } from "lucide-react";

const PROPS = {
  name: Projects.HelloDog.name,
  img: Projects.HelloDog.img,
  alt: Projects.HelloDog.alt,
  icons: Projects.HelloDog.icons,
  website: Projects.HelloDog.website,
  Github: Projects.HelloDog.github,
};

describe("testing PImage Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(
      <ul>
        <PImage {...PROPS} />
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<PImage {...PROPS} />);
  expect(container).toMatchSnapshot();
});
