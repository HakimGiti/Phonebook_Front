"use client";
//import React from 'react';
//import { useState } from "react";
//import Image from "next/image";
import { ImageCustom } from "../Test-m05/components/ImageCustom";

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Menu Bar and Navigation</title>
  {/* <script src="https://cdn.tailwindcss.com"></script> */}
</head>;

const Home05 = () => {
    return (
    <div>
      Hellllllllllllllllllllloooooooooooooooooooo
      <div className="grid grid-cols-4 m-6 p-4 gap-4 items-center justify-around">
        <div className="">
          <ImageCustom alt="Image1" image="/images/nature01.jpeg" />
        </div>
        <div className="">
          <ImageCustom alt="Image2" image="/images/logo.svg" />
        </div>
        <div className="">
          <ImageCustom
            alt="Image3"
            image="https://thumbs.dreamstime.com/b/nature-mountain-scene-beautiful-lake-slovakia-tatra-29395938.jpg"
          />
        </div>
        <div className="">
          <ImageCustom
            alt="Image4"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHZM4ar_UKoarfe_JU0hK0-N6gq4YTtytMw&s"
          />
        </div>
        {/* <ImageCustom className="w-200" alt="Image5" image="/images/nature01.jpeg" />
          <ImageCustom className="w-200" alt="Image6" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHZM4ar_UKoarfe_JU0hK0-N6gq4YTtytMw&s" /> */}
      </div>
    </div>

    );
}

export default Home05;