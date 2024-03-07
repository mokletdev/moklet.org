"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavOption {
  title: string;
  href: string;
}

const navOptions: NavOption[] = [
  { title: "Beranda", href: "/" },
  { title: "Berita", href: "/berita" },
  { title: "Sub-organ", href: "/sub-organ" },
  { title: "Tentang", href: "/tentang" },
  { title: "Developer", href: "/developer" },
];

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="mx-auto w-full max-w-[1192px] py-[22px]">
      <div className="fixed left-1/2 flex w-full max-w-[703px] -translate-x-1/2 justify-between rounded-full border border-neutral-300 px-2 py-1">
        {navOptions.map((navOption) => (
          <Link
            key={navOption.title}
            href={navOption.href}
            className={`hover:text-primary-400 w-1/5 rounded-full border border-white py-2 text-center backdrop-blur-lg transition-all duration-300 ${pathname === navOption.href ? "text-red-400" : ""}`}
          >
            {navOption.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
