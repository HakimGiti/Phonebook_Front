import { useState, useRef, useEffect } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";

const InfiniteSlider = () => {
  const sections = [
    { id: 1, content: <Part1 /> },
    { id: 2, content: <Part2 /> },
    { id: 3, content: <Part1 /> },
    { id: 4, content: <Part2 /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const track = trackRef.current;

    if (currentIndex === sections.length) {
      // بازگشت به اولین بخش
      setTimeout(() => {
        track.style.transition = "none";
        setCurrentIndex(0);
        setIsTransitioning(false);
      }, 500);
    } else if (currentIndex < 0) {
      // بازگشت به آخرین بخش
      setTimeout(() => {
        track.style.transition = "none";
        setCurrentIndex(sections.length - 1);
        setIsTransitioning(false);
      }, 500);
    } else {
      // فعال‌سازی انیمیشن در حالت عادی
      if (!isTransitioning) {
        setTimeout(() => {
          track.style.transition = "transform 0.5s ease";
          setIsTransitioning(true);
        }, 500);
      }
    }
  }, [currentIndex, sections.length, isTransitioning]);

  return (
    <div className="container">
      <div className="slider">
        <div
          className="slider-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
          }}
        >
          {[sections[sections.length - 1], ...sections, sections[0]].map(
            (section, index) => (
              <div key={index} className="section">
                {section.content}
              </div>
            )
          )}
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
          margin: 0px;
        }
        .slider {
          width: 50vw; //800px;
          overflow: hidden;
          // border: 2px solid #ccc;
          // border-radius: 10px;
        }
        .slider-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .section {
          width: 25vw; //400px;
          flex-shrink: 0;
          padding: 20px;
          // background-color: #f0f0f0;
          text-align: center;
          // border: 1px solid #ddd;
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

export default InfiniteSlider;
