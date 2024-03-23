"use client";
import * as NProgress from "nprogress";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import NextjsTopLoader from "nextjs-toploader";

export default function TopLoader() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);

  return <NextjsTopLoader color="#B73636" />;
}
