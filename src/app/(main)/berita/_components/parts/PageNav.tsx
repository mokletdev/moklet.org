import { TertiaryLinkButton } from "@/app/_components/global/LinkButton";
import EclipseIcon from "@/app/_components/icons/EclipseIcon";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import PrimaryLinkButton from "./Button";

export default function PageNav({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  const pages =
    currentPage >= totalPage - 4
      ? Array.from({ length: totalPage }, (_, k) => k + 1).slice(
          totalPage - 4,
          totalPage,
        )
      : Array.from({ length: totalPage }, (_, k) => k + 1).slice(
          currentPage + 1,
          totalPage,
        );

  return (
    <div className="flex gap-[34px] justify-center items-center">
      <PrimaryLinkButton
        href={`/berita?page=${currentPage <= 1 ? currentPage : currentPage - 1}`}
      >
        <ArrowLeft />
      </PrimaryLinkButton>
      <div className="flex gap-[34px]">
        {pages.map((num) =>
          num === currentPage ? (
            <div className="flex flex-col items-center gap-y-2" key={num}>
              <TertiaryLinkButton href="#">{num}</TertiaryLinkButton>
              <EclipseIcon className="w-[6px] h-[6px]" />
            </div>
          ) : (
            <TertiaryLinkButton
              scroll={false}
              href={"?page=" + num.toString()}
              key={num}
            >
              {num}
            </TertiaryLinkButton>
          ),
        )}
        <TertiaryLinkButton href="#">...</TertiaryLinkButton>
      </div>
      <PrimaryLinkButton
        href={`/berita?page=${currentPage >= totalPage ? currentPage : currentPage + 1}`}
      >
        <ArrowRight />
      </PrimaryLinkButton>
    </div>
  );
}
