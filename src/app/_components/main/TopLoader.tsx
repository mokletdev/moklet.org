"use client";
import { usePathname, useSearchParams } from "next/navigation";
import NextjsTopLoader from "nextjs-toploader";
import * as NProgress from "nprogress";
import { Suspense, useEffect } from "react";

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return <NextjsTopLoader color="#B73636" showSpinner={false} />;
}
