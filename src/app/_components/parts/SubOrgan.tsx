import Image from "@/app/_components/global/Image";
import LinkButton from "../global/LinkButton";
import { H1, P, UnderlineTitle } from "../global/Text";
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
      <div className="flex w-full items-center justify-between">
        <div className="w-full max-w-3xl">
          <div className="mb-[42px]">
            <UnderlineTitle lineWidth="330px" className="mb-[18px]">
              Mengembangkan Bakat di Sub-organ
            </UnderlineTitle>
            <P>
              Temukan potensi terbaik dalam pengembangan bakat melalui
              Sub-Organisasi OSIS Moklet yang inspiratif dan beragam.
            </P>
          </div>
          <div className="mb-11 flex w-full items-center gap-[62px]">
            <SubOrganCount count={3} title="Bidang Olahraga" />
            <SubOrganCount count={2} title="Bidang Seni & Bahasa" />
            <SubOrganCount count={5} title="Bidang Lainnya" />
          </div>
          <LinkButton href="#">Explorasi lebih jauh</LinkButton>
        </div>
        <Image
          src={"/images/Sub-organ.png"}
          width={470}
          height={390}
          alt="Sub-organ"
          className="h-[390px] w-[470px]"
        />
      </div>
    </SectionWrapper>
  );
}
