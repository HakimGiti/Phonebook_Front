import Image from "next/image";
import React from "react";

const TopLink2 = () => {
  const handleClickCloseLMenu01 = () => {
    //Function =======================
    const txt01 = document.getElementById("sidbarL01");
    const txt02 = document.getElementById("TopL12");
    txt01.className =
      "fixed z-50 flex flex-col p-4 w-72 shrink-0 h-screen overflow-y-scroll text-white bg-gray-800 -translate-x-96 duration-700 lg:translate-x-0 lg:relative";
    txt02.className = "hidden items-center";
    //alert(bool01);
  };

  return (
    <div>
      {/* Top Link -------------------- */}
      <div id="TopL10" className="flex items-center justify-between">
        <a id="TopL11" className="shrink-0" href="#">
          <Image
            width={200}
            height={200}
            className="bg-white rounded-lg"
            src="./images/logo.svg"
            alt="Logo"
          />
        </a>
        <button
          id="TopL12"
          className="hidden items-center"
          onClick={handleClickCloseLMenu01}
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopLink2;
