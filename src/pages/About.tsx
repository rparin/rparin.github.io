import { AboutMe } from "@/constants/About";
import { AboutImages } from "@/constants/Images";
import { TextImage } from "@/components/TextImage";

export default function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="before:content-[''] before:h-20 before:block mx-5 lg:mx-16">
      <div className="flex flex-col gap-10">
        <h3 className="text-base md:text-lg text-center font-normal">
          <i>{AboutMe.Intro}</i>
        </h3>

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
