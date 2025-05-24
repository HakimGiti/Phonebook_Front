"use client";
import { useState } from "react";

import React from "react";
import SvgPhoneCall from "../public/images/phone-call-2.svg";
import SvgEmail from "../public/images/email-1.svg";
import Svg3HLine from "../public/images/3H-Line-2.svg";
import SvgClose from "../public/images/Xclose.svg";

function HeadingMenu() {
  const [isOpen, setIsOpen] = useState(false); //UseState ====== Open/Close
  const OpenCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="h-fit bg-[#c4d6f3]">
        {/* First-Line with phone & Email ------------------------------------------------- */}
        <div className="flex flex-row px-4 bg-black h-14 items-center text-white font-stretch-150%">
          {/* Left = Phone Number ----------------------------------------- */}
          <div className="w-1/2 ">
            <a
              className="flex justify-start w-fit p-1 rounded-sm ring-1 ring-white"
              href="https://www.free-css.com/free-css-templates"
            >
              <div className="flex items-center h-3 w-3 mr-1 pt-2 bg-inherit">
                <SvgPhoneCall className="text-amber-500" />
              </div>
              Call : +01 123455678990
            </a>
          </div>
          {/* Right = Email ----------------------------------------- */}
          <div className="felx w-1/2">
            <div className="flex justify-end">
              <a
                className="flex justify-start"
                href="https://www.free-css.com/free-css-templates"
              >
                <div className="flex items-center h-4 w-4 mr-1 pt-2 bg-inherit">
                  <SvgEmail className="text-amber-500" />
                </div>
                 Email : demo@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* Second-Line with Menu-Bar ------------------------------------------------- */}
        <div className="flex flex-row px-6 h-14 items-center">
          {/* Left = Inances Button ---------------------------------- */}
          <div className="flex w-1/2 text-blue-800 text-2xl font-bold font-stretch-90%">
            <a className="" href="#">
              INANCE
            </a>
          </div>
          {/* Right = Menu Options ----------------------------------- */}
          <div className="w-1/2">
            <div className="hidden flox px-6 overflow-x-visible font-semibold lg:block">
              <div className="flex gap-10 justify-end">
                <a className=" text-blue-700" href="#">
                  Home
                </a>
                <a className="hover:text-blue-700 " href="#">
                  About
                </a>
                <a className="hover:text-blue-700" href="#">
                  Services
                </a>
                <a className="hover:text-blue-700 min-w-fit" href="#">
                  Contact Us
                </a>
              </div>
            </div>

            {/* NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}
            {/* Three-Line Menu ( Open/Close ) -------------------------------------------- */}
            <div
              id="OpenClose"
              className="lg:hidden"
              onClick={OpenCloseMenu}
            >
              <div className="flex justify-end">
                <div className="flex items-center h-16 w-16 mt-10">
                  {/* Single-Line if statement ---------------------- */}
                  {/* {isOpen ? <SvgClose className="" /> : <Svg3HLine className="" />} */}
                  {isOpen ? (
                    <SvgClose className="" />
                  ) : (
                    <Svg3HLine className="" />
                  )}
                </div>
              </div>
            </div>
            {/* NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}
          </div>
        </div>

        {isOpen && (
          <div
            id="Menulist"
            className="container mx-auto flox pt-6 font-semibold lg:hidden transition duration-700"
          >
            <div className="flex justify-center">
              <div className="flex flex-col gap-4 justify-center items-center">
                <a className=" text-blue-800" href="#">
                  Home
                </a>
                <a className="" href="#">
                  About
                </a>
                <a className="" href="#">
                  Services
                </a>
                <a className="min-w-fit" href="#">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeadingMenu;
