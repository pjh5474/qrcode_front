"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon as OutlineHomeIcon,
  CreditCardIcon as OutlineCreditCardIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  CreditCardIcon as SolidCreditCardIcon,
} from "@heroicons/react/24/solid";

export default function BottomNavigation() {
  const pathname = usePathname();
  return (
    <div className="w-full mx-auto grid grid-cols-2 border-neutral-600 border-t px-5 py-3 *:text-gray-600 ">
      <Link href="/menu" className="flex flex-col items-center gap-px ">
        {pathname === "/menu" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>메뉴</span>
      </Link>
      <Link href="/payment" className="flex flex-col items-center gap-px ">
        {pathname === "/payment" ? (
          <SolidCreditCardIcon className="w-7 h-7" />
        ) : (
          <OutlineCreditCardIcon className="w-7 h-7" />
        )}
        <span>결제</span>
      </Link>
    </div>
  );
}
