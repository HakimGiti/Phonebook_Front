"use client";

import React from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider1 = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <img src="/images/nature01.jpeg" alt="Image 1" />
        <img src="/images/googlemap.png" alt="Image 2" />
        <img src="/images/about-img.jpg" alt="Image 3" />
        
        {/* تکرار تصاویر برای حلقه مداوم */}
        <img src="/images/nature01.jpeg" alt="Image 1" />
        <img src="/images/googlemap.png" alt="Image 2" />
        <img src="/images/about-img.jpg" alt="Image 3" />
      </div>
    </div>
  );
};

export default ImageSlider1;
