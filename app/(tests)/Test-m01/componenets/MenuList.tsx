"use client";

import SvgBell from "../icons/Bell.svg";

import React, { useState, useRef, useEffect } from "react";
import ListRHS from "./ListRHS";

const MenuList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // بسته شدن منو با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {

        if (menuRef.current && menuRef.current instanceof HTMLElement && !menuRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);

      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={toggleMenu}
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <div className="size-8 shrink-0">
          <SvgBell />
        </div>
      </button>
      {isMenuOpen && <ListRHS />}
    </div>
  );
};

export default MenuList;
