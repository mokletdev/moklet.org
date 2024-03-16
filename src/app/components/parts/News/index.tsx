import { SectionWrapper } from "@/app/components/global/Wrapper";
import { H2 } from "@/app/components/global/Text";
import ArrowRight from "@/app/components/icons/ArrowRight";
import Link from "next/link";
import Image from "next/image";

export default function News() {
  return (
    <SectionWrapper id="berita">
      <div className="flex w-full flex-col gap-[54px]">
        <div className="flex flex-row items-center justify-between">
          <H2>Berita Terbaru Organisasi & Sub-organisasi</H2>
          <Link href="/berita">
            <div className="group flex gap-[8px]">
              <span className="text-base text-primary-400 transition-all duration-500 group-hover:text-primary-200">
                Lihat semua
              </span>
              <ArrowRight className="transition-all duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        <div className="flex w-full justify-between gap-[36px]">
          <figure className="w-1/3">
            <div className="h-[200px] w-full">
              <Image
                src={
                  "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
                }
                alt="wao"
                unoptimized
                height={200}
                width={372}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div>
                <div className="mb-[16px] mt-[26px] flex gap-[10px]">
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">Lorem</span>
                  </Link>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div>
                  <span className="text-base text-black">Lorem Ipsum</span>
                </div>
                <span className="text-neutral-500">Feb 28, 2024</span>
              </div>
            </div>
          </figure>
          <figure className="w-1/3">
            <div className="h-[200px] w-full">
              <Image
                src={
                  "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
                }
                alt="wao"
                unoptimized
                height={200}
                width={372}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div>
                <div className="mb-[16px] mt-[26px] flex gap-[10px]">
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">Lorem</span>
                  </Link>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div>
                  <span className="text-base text-black">Lorem Ipsum</span>
                </div>
                <span className="text-neutral-500">Feb 28, 2024</span>
              </div>
            </div>
          </figure>
          <figure className="w-1/3">
            <div className="h-[200px] w-full">
              <Image
                src={
                  "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg"
                }
                alt="wao"
                unoptimized
                height={200}
                width={372}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div>
                <div className="mb-[16px] mt-[26px] flex gap-[10px]">
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link
                    href={"#"}
                    className="rounded-full bg-primary-50 px-[18px] py-1.5"
                  >
                    <span className="text-sm text-primary-400">Lorem</span>
                  </Link>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>

              <div className="flex w-full justify-between">
                <div>
                  <span className="text-base text-black">Lorem Ipsum</span>
                </div>
                <span className="text-neutral-500">Feb 28, 2024</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  );
}
