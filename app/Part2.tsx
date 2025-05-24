import SvgStar from "../public/images/star-yellow.svg";
import SvgDoubleQuote from "../public/images/double-quote.svg";
import { ImageCustom } from "@/components/ImageCustom";

const Part2 = () => {
  return (
    <div className="flex flex-col px-6 h-64 max-w-max items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] bg-white text-black transition duration-300">
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center justify-between py-1 gap-4">
          <div className="w-32">
            <ImageCustom
              className="!rounded-full"
              alt="Client-2"
              image="/images/client-2.jpg"
            />
          </div>
          <div>
            Joich morik
            <div className="flex justify-around">
              <SvgStar className="h-4 text-yellow-500" />
              <SvgStar className="h-4 text-yellow-500" />
              <SvgStar className="h-4 text-yellow-500" />
              <SvgStar className="h-4 text-yellow-500" />
              <SvgStar className="h-4 text-yellow-500" />
            </div>
          </div>
        </div>
        <div>
          <SvgDoubleQuote className="h-4 w-fit rotate-180 text-yellow-500" />
        </div>
      </div>
      <div className="mt-3 font-medium text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga
        ducimus quae facere commodi vitae esse dolor in error expedita?
      </div>
    </div>
  );
};

export default Part2;
