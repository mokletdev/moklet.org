import Image from "next/image";
import Link from "next/link";

export default function Berita() {
  return (
    <>
      <section className="min-h-[744px] w-full">
        <div className="w-full">
          <Link href={"/"}>
            <Image
              src={"/horizontal.svg"}
              alt="Logo"
              width={110}
              height={40}
              className="pointer-events-none h-[40px] w-[110px]"
            />
          </Link>
        </div>
        <div className="relative w-full"></div>
      </section>
      <section></section>
    </>
  );
}
