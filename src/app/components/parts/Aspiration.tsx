import { SectionWrapper } from "../global/Wrapper";
import EclipseIcon from "@/app/components/icons/EclipseIcon";

export default function Aspiration() {
  return (
    <SectionWrapper id="aspirasi">
      <div className="relative w-full">
        <EclipseIcon className="absolute left-[70px] top-[70px]" />
        <div className="absolute"></div>
        <div></div>
      </div>
    </SectionWrapper>
  );
}
