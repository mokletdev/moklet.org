import Image from "@/app/_components/global/Image";
import LinkButton from "../global/LinkButton";
import { H1, H2, P } from "../global/Text";
import { SectionWrapper } from "../global/Wrapper";

function SubOrganCount({
  count,
  title,
}: Readonly<{ count: number; title: string }>) {
  return (
    <div>
      <H1 className="text-primary-400">{count < 10 ? `0${count}` : count}</H1>
      <P>{title}</P>
    </div>
  );
}

export default function SubOrgan() {
  return (
    <SectionWrapper id="sub-organ">
      <div className="flex flex-col-reverse md:flex-row gap-[72px] md:gap-0 w-full items-start md:items-center justify-start md:justify-between">
        <div className="w-full max-w-3xl">
          <div className="mb-[42px]">
            <div className="relative">
              <H2 className={"z-10 font-bold text-black"}>
                Mengembangkan Bakat di Sub-organ
              </H2>
              <div
                className={`absolute left-[3px] top-[17px] md:top-[28px] -z-10 h-[16px] bg-primary-100 w-[220px] md:w-[330px]`}
              ></div>
            </div>
            <P>
              Temukan potensi terbaik dalam pengembangan bakat melalui
              Sub-Organisasi OSIS Moklet yang inspiratif dan beragam.
            </P>
          </div>
          <div className="mb-11 flex flex-col sm:flex-row w-full md:items-center gap-[62px]">
            <SubOrganCount count={3} title="Bidang Olahraga" />
            <SubOrganCount count={2} title="Bidang Seni & Bahasa" />
            <SubOrganCount count={5} title="Bidang Lainnya" />
          </div>
          <LinkButton href="#">Explorasi lebih jauh</LinkButton>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/Sub-organ.png"}
            width={470}
            height={390}
            alt="Sub-organ"
            className="w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
