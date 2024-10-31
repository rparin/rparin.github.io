import { AboutMe } from "@/constants/About";
import { AboutImages } from "@/constants/Images";
import { TextImage } from "@/components/TextImage";

export default function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="mx-5 before:block before:h-20 before:content-[''] lg:mx-16">
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-base font-normal md:text-lg">
          <i>{AboutMe.Intro}</i>
        </h2>

        <TextImage
          variant={"left"}
          text={AboutMe.Goals}
          textSm={AboutMe.GoalsSm}
          img={AboutImages.code.img}
          alt={AboutImages.code.alt}
        />
        <TextImage
          variant={"right"}
          text={AboutMe.Hobbies}
          textSm={AboutMe.HobbiesSm}
          img={AboutImages.book.img}
          alt={AboutImages.book.alt}
        />
        <TextImage
          variant={"left"}
          text={AboutMe.Interests}
          textSm={AboutMe.InterestsSm}
          img={AboutImages.food.img}
          alt={AboutImages.food.alt}
        />
        <TextImage
          variant={"right"}
          text={AboutMe.Gaming}
          textSm={AboutMe.GamingSm}
          img={AboutImages.game.img}
          alt={AboutImages.game.alt}
        />
      </div>
    </section>
  );
}
