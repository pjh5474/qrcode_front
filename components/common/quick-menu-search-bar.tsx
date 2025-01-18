"use client";

import { useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function QuickMenuSearchBar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleToggle = () => {
    if (!isSearchBarOpen) {
      setIsAnimating(true);
    }
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleTransitionEnd = () => {
    if (!isSearchBarOpen) {
      setIsAnimating(false);
    }
    if (isSearchBarOpen) {
      setIsAnimating(false);
    }
  };

  return (
    <div
      className={`fixed top-20 left-5 ${isSearchBarOpen ? "w-32" : "w-0"} 
      opacity-90 bg-slate-300 text-black shadow-lg transition-all duration-300 rounded-md z-50`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button
        className="absolute top-0 -right-5 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-500"
        onClick={handleToggle}
      >
        {isSearchBarOpen ? (
          <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
        ) : (
          <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
        )}
      </button>

      {/* Menu Items */}
      {isSearchBarOpen && (
        <ul className="p-4">
          <li className="mb-2 flex items-center ">
            <a href="#" className="ml-3 block">
              {!isAnimating ? (
                <span className="font-semibold">추천 메뉴</span>
              ) : (
                <div className="h-6" />
              )}
            </a>
          </li>
          <li className="mb-2 flex items-center ">
            <a href="#" className="ml-3 block">
              {!isAnimating ? (
                <span className="font-semibold">식사류</span>
              ) : (
                <div className="h-6" />
              )}
            </a>
          </li>
          <li className="mb-2 flex items-center ">
            <a href="#" className="ml-3 block">
              {!isAnimating ? (
                <span className="font-semibold">음료류</span>
              ) : (
                <div className="h-6" />
              )}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
