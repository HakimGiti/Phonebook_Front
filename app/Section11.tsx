import InfiniteDynamicSlider from "./InfiniteDynamicSlider";

const Section10 = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="">
      <h1>اسلایدر با تعداد قابل مشاهده داینامیک</h1>
      <h2>نمایش یک بخش:</h2>
      <InfiniteDynamicSlider visibleSections={1} />
      <h2>نمایش دو بخش:</h2>
      <InfiniteDynamicSlider visibleSections={2} />
      </div>
    </div>
  );
};

export default Section10;
