"use client";

import SvgTail from "./icons/Tail.svg";
import Svg3HLine from "./icons/Line3H.svg";
import SvgClose from "./icons/Xclose.svg";
import Menubar from "./componenets/MenuList";

import React, { useState } from "react";
import ToolbarList from "./componenets/ToolbarList";
//import { ImageCustom } from "@/components/ImageCustom";
//import { ImageCustom } from "../Test-m06/components/ImageCustom";
import { ImageCustom } from "./componenets/ImageCustom";
//import Image from "next/image";
//import React from 'react';

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Test_01</title>
  {/* <script src="https://cdn.tailwindcss.com"></script> */}
</head>;

const Home01 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="block h-auto md:flex md:flex-row md:gap-4 items-start justify-start md:item-center md:justify-between bg-gray-800">
        {/* Left side of Toolbar ======================================================================= */}
        <div className="flex flex-row h-20 p-2 items-center justify-between text-white text-1xl bg-gray-800">
          <div className="flex ml-8 text-slate-900 h-20 w-20 shrink-0">
            <SvgTail />
          </div>

          {/* Toolbar_List ---------------------------------------- */}
          <div className="hidden md:flex">
            <ul className="flex items-center justify-start p-4 gap-4 text-white text-1xl bg-gray-800">
              <li className="p-3 w-full rounded-lg">
                <a href="#">Dashboard</a>
              </li>
              <li className="p-3 rounded-lg hover:bg-gray-700">
                <a href="#">Team</a>
              </li>
              <li className="p-3 rounded-lg hover:bg-gray-700">
                <a href="#">Projects</a>
              </li>
              <li className="p-3 rounded-lg hover:bg-gray-700">
                <a href="#">Calendar</a>
              </li>
              <li className="p-3 rounded-lg hover:bg-gray-700">
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row items-center justify-between p-2 gap-4 bg-gray-800">
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-800"
            >
              {isMenuOpen ? (
                <SvgClose className="size-12" />
              ) : (
                <Svg3HLine className="size-12" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden w-screen bg-gray-500">
          {isMenuOpen && <ToolbarList />}
        </div>

        {/* Right side of Toolbar ======================================================================= */}
        <div className="flex items-center justify-between pl-4 pr-10 gap-4 md:justify-end w-screen mx-auto bg-gray-800">
          <div className="flex flex-row items-center justify-between p-2 gap-4 shrink-0">
            <div className="items-center size-12 rounded-full shrink-0">
              <ImageCustom
                className="w-12 h-12 !rounded-full"
                alt="Image1"
                image="/images/nature01.jpeg"
              />
            </div>

            <div className="block h-auto text-lg text-white w-fit overflow-x-hidden">
              Tom Cook
              <div className="block h-auto text-md font-semibold text-gray-500">
                Tom@Example.com
              </div>
            </div>
          </div>

          <div className="flex overflow-x-visible">
            <Menubar />
          </div>
        </div>
      </div>

      {/* MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/}

      <div
        className="h-20 p-6 rounded-lg text-black text-left text-4xl tracking-tight font-semibold bg-white shadow"
        // className="flex flex-col md:flex-row items-center ml-40 p-2 mr-8 bg-white"
      >
        Dashboard
      </div>
      <div className="h-full w-full p-8 text-black text-left text-4xl bg-transparent ">
        <div className="h-screen w-full p-8 border-4 border-gray-800 rounded-sm text-black text-left text-4xl bg-transparent">
          Main Content
        </div>
      </div>
    </div>
  );
};

export default Home01;
