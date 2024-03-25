import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";
import DeveloperFigure from "./_components/DeveloperFigure";

const devs = [
  {
    name: "Kusindra Aji Rabbany",
    role: "Fullstack Developer",
    picture: "https://avatars.githubusercontent.com/u/83589651",
    instagram: "kusindr_",
    linkedin: "in/kusindraaji",
    website: "www.benspace.xyz",
  },
  {
    name: "Ahsan Awadullah Azizan",
    role: "Fullstack Developer",
    picture: "https://avatars.githubusercontent.com/u/116133300",
    instagram: "ahsanzizan",
    linkedin: "in/ahsan-azizan",
    website: "www.ahsanzizan.xyz",
  },
  {
    name: "Teguh Bayu Pratama",
    role: "Frontend Developer",
    picture: "https://avatars.githubusercontent.com/u/149038828",
    instagram: "soyuz_slav",
    linkedin: "in/teguhbayupratama",
    website: "bayu.xtero.live",
  },
  {
    name: "Muhammad Fadhil Kholaf",
    role: "Frontend Developer",
    picture: "https://avatars.githubusercontent.com/u/110389260",
    instagram: "tlg69.fadhil",
    linkedin: "in/muhammad-fadhil-kholaf-7b1a7a270",
    website: "fadhilkholaf.my.id",
  },
  {
    name: "Moch. Gilang Ramadhan",
    role: "Graphic & UI/UX Designer",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "guilangs_",
    linkedin: "in/gilang-ramadhan-4420b8285",
  },
  {
    name: "Pandhu Arya Munjalindra",
    role: "-",
    picture: "https://pbs.twimg.com/media/GHK3FYNa8AAR21N.jpg",
    instagram: "@pandhuu._",
    linkedin: "in/pandhu-arya",
    website: "pandhu-munjalindra.xyz",
  },
  {
    name: "Muhammad Zuhair Zuhdi",
    role: "Backend Developer",
    picture: "https://avatars.githubusercontent.com/u/67100526",
    instagram: "muhammad_zuhair_zuhdi",
    linkedin: "in/frostfire2007",
  },
  {
    name: "Arsyad Ali Mahardika",
    role: "Frontend Developer",
    picture: "https://avatars.githubusercontent.com/u/90751730",
    instagram: "arsyadam.id",
    linkedin: "in/arsyadam",
    website: "arsyadam.id",
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
