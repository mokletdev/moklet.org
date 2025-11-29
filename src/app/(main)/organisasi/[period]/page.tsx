import { findOrganisasis } from "@/utils/database/organisasi.query";
import { findPeriod } from "@/utils/database/periodYear.query";
import { notFound } from "next/navigation";
import Organizations from "./_components/Parts/Organizations";

export const revalidate = 3600;

export default async function OrganisasiByPeriod({
  params,
}: {
  params: { period: string };
}) {
  const period = await findPeriod({ period: params.period });
  if (!period) return notFound();

  const organisasis = await findOrganisasis({ period_id: period.id });

  return <Organizations period={period.period} data={organisasis} />;
}
