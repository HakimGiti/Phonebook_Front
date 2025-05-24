"use client";

import LeftSidebar from "./LeftSidebar";
//import RightHeader from "./RightHeader";
import RightMain from "./RightMain";
//import { checkPrime } from "crypto";
//import Image from "next/image";
//import React from 'react';
//import { useState } from "react";

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Menu Bar and Navigation full-2</title>
  {/* <script src="https://cdn.tailwindcss.com"></script> */}
</head>;

const Home04 = () => {
    return (
        <div
        id="body01"
        className="z-0 flex bg-gray-100 dark:bg-gray-800 dark:text-white"
      >
        {/* Left Side bar (Navigation) --------------------------------------------------- */}
        <LeftSidebar />
        {/* Right ------------------------------------------------------------------------ */}
        <div
          id="Rightmain01"
          className="flex z-10 flex-col w-full text-black bg-gray-100 max-h-screen overflow-auto" //max-h-screen overflow-auto hideScrollbar
        >
          {/* <RightHeader /> */}
          <RightMain />
        </div>
      </div>
  
    );
}

export default Home04;