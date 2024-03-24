import Image from "@/app/_components/global/Image";
import Link from "next/link";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { H1, P } from "@/app/_components/global/Text";
import DeveloperFigure from "./_components/DeveloperFigure";

const devs = [
  {
    name: "Ambatron",
    role: "Penyefonk",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
  {
    name: "Adit",
    role: "Waw",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
  {
    name: "Ahsan",
    role: "CEO",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
  {
    name: "Bayu",
    role: "Numpang nama",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
  {
    name: "Gilang",
    role: "🥶",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
  {
    name: "Beni",
    role: "Hengker",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimibul@ambatukam.com",
  },
];

export default function Developer() {
  return (
    <SectionWrapper id="developer">
      <div>
        <div className="flex flex-col gap-[18px] mb-[54px]">
          <H1>Lorem ipsum dolor sit amet consectetur</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
            urna quis eleifend pharetra. Fusce suscipit magna quis ligula
            commodo, vestibulum sodales orci tempor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis dapibus quis enim nec auctor.
            Donec rhoncus dui sit amet augue placerat, molestie consequat nulla
            tempus.
          </P>
        </div>

        <div className="flex flex-wrap gap-x-[38px] gap-y-[62px]">
          {devs.map((dev) => (
            <DeveloperFigure dev={dev} key={dev.name} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
