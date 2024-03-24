import Image from "@/app/_components/global/Image";
import Link from "next/link";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import { H1, P } from "@/app/_components/global/Text";
import DeveloperFigure from "./_components/DeveloperFigure";

const devs = [
  {
    name: "Kusindra Aji Rabbany",
    role: "Fullstack Developer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@kusindr_",
    email: "work@benspace.xyz",
  },
  {
    name: "Ahsan Awadullah Azizan",
    role: "Fullstack Developer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@ahsanzizan",
    email: "contact@ahsanzizan.xyz",
  },
  {
    name: "Teguh Bayu Pratama",
    role: "Frontend Developer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@soyuz_slav",
    email: "drimi@ambatukam.com",
  },
  {
    name: "Muhammad Fadhil Kholaf",
    role: "Frontend Developer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@tlg69.fadhil",
    email: "drimi@ambatukam.com",
  },
  {
    name: "Moch. Gilang Ramadhan",
    role: "Graphic & UI/UX Designer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@guilangs_",
    email: "drimi@ambatukam.com",
  },
  {
    name: "Pandhu Arya Munjalindra",
    role: "Hengker",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@loremipsum",
    email: "drimi@ambatukam.com",
  },
  {
    name: "Muhammad Zuhair Zuhdi",
    role: "Hengker",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@muhammad_zuhair_zuhdi",
    email: "drimi@ambatukam.com",
  },
  {
    name: "Arsyad Ali Mahardika",
    role: "Hengker",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@arsyadam.id",
    email: "drimi@ambatukam.com",
  },
];

export default function Developer() {
  return (
    <SectionWrapper id="developer">
      <div>
        <div className="flex flex-col gap-[18px] mb-[54px] text-wrap">
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

        <div className="w-full flex flex-wrap gap-x-0 lg:gap-x-[38px] gap-y-[62px]">
          {devs.map((dev) => (
            <DeveloperFigure dev={dev} key={dev.name} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
