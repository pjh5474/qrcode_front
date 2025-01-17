"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon as OutlineHomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as SolidHomeIcon } from "@heroicons/react/24/solid";

export default function BottomNavigation() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-3 border-neutral-600 border-t px-5 py-3 *:text-gray-600 ">
      <Link href="/menu" className="flex flex-col items-center gap-px ">
        {pathname === "/menu" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>메뉴</span>
      </Link>
      <Link href="/menu" className="flex flex-col items-center gap-px ">
        {pathname === "/menu" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>메뉴</span>
      </Link>
      <Link href="/menu" className="flex flex-col items-center gap-px ">
        {pathname === "/menu" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>메뉴</span>
      </Link>
    </div>
  );
}
