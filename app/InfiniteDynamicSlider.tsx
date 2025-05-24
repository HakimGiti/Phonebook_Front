import { useState, useRef, useEffect } from "react";

const InfiniteDynamicSlider = ({ visibleSections = 1 }) => {
  const sections = [
    { id: 1, content: "بخش ۱" },
    { id: 2, content: "بخش ۲" },
    { id: 3, content: "بخش ۳" },
    { id: 4, content: "بخش ۴" },
    { id: 5, content: "بخش ۵" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  // ایجاد آرایه حلقه‌ای با افزودن بخش‌های اضافی در ابتدا و انتها
  const adjustedSections = [
    ...sections.slice(-visibleSections),
    ...sections,
    ...sections.slice(0, visibleSections),
  ];

  const totalSections = sections.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const track = trackRef.current;

    // بدون انیمیشن بازگشت به موقعیت اولیه
    if (currentIndex >= totalSections) {
      setTimeout(() => {
        track.style.transition = "none";
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setCurrentIndex(totalSections - 1);
      }, 500);
    }

    // بازگرداندن انیمیشن
    setTimeout(() => {
      if (track) {
        track.style.transition = "transform 0.5s ease";
      }
    }, 50);
  }, [currentIndex, totalSections]);

  const sectionWidth = 100 / visibleSections;

  return (
    <div className="container">
      <div className="slider">
        <div
          className="slider-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${
              (currentIndex + visibleSections) * sectionWidth
            }%)`,
            width: `${adjustedSections.length * sectionWidth}%`,
          }}
        >
          {adjustedSections.map((section, index) => (
            <div
              key={index}
              className="section"
              style={{
                flex: `0 0 ${sectionWidth}%`,
              }}
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button className="control-button" onClick={handlePrev}>
          قبلی
        </button>
        <button className="control-button" onClick={handleNext}>
          بعدی
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          margin: 20px;
        }
        .slider {
          width: 400px;
          overflow: hidden;
          border: 2px solid #ccc;
          border-radius: 10px;
        }
        .slider-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
          text-align: center;
          border: 1px solid #ddd;
        }
        .controls {
          display: flex;
          gap: 10px;
        }
        .control-button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        .control-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default InfiniteDynamicSlider;
