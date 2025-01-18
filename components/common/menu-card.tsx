"use client";

import { formatToWon } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function MenuCard() {
  const [count, setCount] = useState(1);
  const price = 6000;
  return (
    <div className="w-full bg-slate-200 shadow-md shadow-slate-300 rounded-md grid grid-cols-10 gap-3 *:text-black p-2">
      <div className="col-span-3 relative size-auto rounded-md overflow-hidden min-w-24 min-h-24 aspect-square">
        <Image fill className="cover" alt={"Logo"} src={"/No.png"} />
      </div>

      <div className="col-span-7 flex flex-col justify-between p-2">
        <span className="text-lg font-semibold">음식 이름</span>

        <span className="text-sm">
          간단 설명 간단 설명간단 설명간단 설명간단 설명간단 설명간단 설명간단
          설명
        </span>

        <span className="text-lg font-semibold text-right">
          {formatToWon(price)} 원
        </span>

        <div className="mt-3 flex items-center space-x-4">
          <div className="flex justify-center items-center border rounded-md px-2 py-1 bg-white  min-w-24">
            <button
              className="text-xl font-semibold text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span className="mx-4 text-lg font-medium">{count}</span>
            <button
              className="text-xl font-semibold text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>

          <button className="flex-1 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
