import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { TextImage } from "@/components/TextImage";
import { AboutImages } from "@/constants/Images";
import { AboutMe } from "@/constants/About";

const PROPS = {
  text: AboutMe.Gaming,
  img: AboutImages.game.img,
  alt: AboutImages.game.alt,
};

describe("testing TextImage Component Accessibility", () => {
  expect.extend(toHaveNoViolations);
  test("it should have no accessibility violations", async () => {
    const { container } = render(<TextImage {...PROPS} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

test("it renders component unchanged", () => {
  const { container } = render(<TextImage {...PROPS} />);
  expect(container).toMatchSnapshot();
});
