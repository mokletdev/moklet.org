import { UnderlineTitle } from "../../global/Text";
import PersonData from "./PersonData";

export default function Opinions() {
  return (
    <section className="flex " id="#pendapat">
      <div className="flex flex-col justify-center">
        <UnderlineTitle lineWidth={"232px"}>
          Kata Mereka Tentang Organisasi dan Sub-Organisasi Moklet
        </UnderlineTitle>
        <div className="mt-[102px] flex gap-[18px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[18px]">
              <div className="flex w-[424px] items-center justify-center rounded-2xl border border-neutral-400 px-[28px] py-[32px]">
                <div className="text-wrap">
                  <PersonData
                    name="Rina Setiawan"
                    role="Pembimbing Media Moklet"
                  />
                  <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ullamcorper odio justo.
                  </p>
                </div>
              </div>

              <div className="flex w-[424px] items-center justify-center rounded-2xl border border-neutral-400 px-[28px] py-[32px]">
                <div className="text-wrap">
                  <PersonData
                    name="Ibani Hillabi"
                    role="Ketua PASKATEMA 2023/2024"
                  />
                  <p className="text-neutral-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ullamcorper odio justo.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-[865px] items-center justify-center rounded-2xl border border-neutral-400 px-[28px] py-[32px]">
              <div className="text-wrap">
                <PersonData
                  name="Ibani Hillabi"
                  role="Ketua PASKATEMA 2023/2024"
                />
                <p className="text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ullamcorper odio justo, vitae blandit lacus facilisis
                  lobortis. Nulla facilisi. Nunc sodales magna nec ante
                  hendrerit, et vulputate elit fermentum. magna nec ante
                  hendrerit, et vulputate elit fermentum.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-[309px] items-center justify-center rounded-2xl border border-neutral-400 px-[28px] py-[32px]">
            <div className="text-wrap">
              <PersonData name="Budi Prasetyo" role="Ketua METIC 2024" />
              <p className="text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ullamcorper odio justo, vitae blandit lacus facilisis lobortis.
                Nulla facilisi. Nunc sodales magna nec ante hendrerit, et
                vulputate elit fermentum. magna nec ante hendrerit, et vulputate
                elit fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
