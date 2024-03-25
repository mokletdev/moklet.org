import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";

export default function useCustomRouter() {
  const router = useRouter();
  const { push, back, forward, prefetch, replace } = router;

  router.push = (href, options) => {
    NProgress.start();
    return push(href, options);
  };

  router.back = () => {
    NProgress.start();
    return back();
  };

  router.forward = () => {
    NProgress.start();
    return forward();
  };

  router.prefetch = (href, options) => {
    NProgress.start();
    return prefetch(href, options);
  };

  router.replace = (href, options) => {
    NProgress.start();
    return replace(href, options);
  };

  return router;
}
