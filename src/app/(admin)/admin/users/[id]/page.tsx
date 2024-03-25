import React from "react";
import { findUserId } from "@/utils/database/user.query";

export default async function detailRegistran({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const user = await findUserId(id);

  return (
    <React.Fragment>
        <h1>Tes</h1>
    </React.Fragment>
  );
}

export const revalidate = 0;
