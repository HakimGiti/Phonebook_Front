import { useState, useRef } from "react";
import Part1 from "./Part1";

const ImageSlider2 = () => {
  const images = [
    "/images/nature01.jpeg", // مسیر تصاویر در پوشه public
    "/images/googlemap.png",
    //"/images/about-img.jpg",
    // تصاویر بیشتری اضافه کنید
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const handleNext = () => {
    const track = trackRef.current;

    // حرکت به تصویر بعدی
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      // بررسی اینکه آیا به انتهای آرایه رسیدیم
      if (newIndex === images.length) {
        // بازگشت بی‌درنگ به ابتدای تصاویر
        setTimeout(() => {
          track.style.transition = "none";
          setCurrentIndex(0);
        }, 500); // مدت زمان انیمیشن
      }

      return newIndex;
    });

    // فعال کردن انیمیشن
    track.style.transition = "transform 0.5s ease";
  };

  return (
    <div className="container">
      <div className="image-slider">
        <div
          className="image-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.concat(images[0]).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>
      <button
        className="control-button p-2 text-lg text-white bg-[#007bff] rounded-md cursor-pointer"
        onClick={handleNext}
      >
        {"<--"}
      </button>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 0px;
          margin: 20px;
        }
        .image-slider {
          width: 300px;
          overflow: hidden;
          border: 2px solid #ccc;
          border-radius: 10px;
        }
        .image-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .slider-image {
          width: 300px;
          height: 200px;
        }
        // .control-button {
        //   padding: 10px 20px;
        //   font-size: 16px;
        //   border: none;
        //   background-color: #007bff;
        //   color: white;
        //   border-radius: 5px;
        //   cursor: pointer;
        // }
        .control-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider2;
