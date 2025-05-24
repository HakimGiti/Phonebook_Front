import SvgStar from "./public/images/star-yellow.svg";
import SvgDoubleQuote from "./public/images/double-quote.svg";
//import Image from "next/image";
import { ImageCustom } from "./components/ImageCustom";

const Section5 = () => {
  return (
    <div>
      <section className="h-fit bg-inherit">
        <div className="container mx-auto max-w-max flex flex-col justify-center md:flex-row">
          <div className="flex flex-col justify-center items-center md:flox-row px-6 py-6 lg:items-center">
            <p className="mb-20 text-4xl font-stretch-90%% font-bold">
              WHAT OUR CLIENTS SAY
            </p>

            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10">
              <div className="flex flex-col px-6 h-64 max-w-max items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] bg-white text-black transition duration-300">
                <div className="flex items-center justify-around w-full">
                  <div className="flex items-center justify-between py-1 gap-4">
                    <div className="w-32">
                      <ImageCustom
                        className="!rounded-full"
                        alt="Client-1"
                        image="/images/client-1.jpg"
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis fuga ducimus quae facere commodi vitae esse dolor in
                  error expedita?
                </div>
              </div>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis fuga ducimus quae facere commodi vitae esse dolor in
                  error expedita?
                </div>
              </div>
            </div>

            <div className="container mt-10 mx-auto flex flex-row justify-center gap-10">
              <button
                type="button"
                className="w-12 h-12 ring-blue-800 bg-blue-800 p-1 text-white"
              >
                {"<--"}
              </button>
              <button
                type="button"
                className="w-12 h-12 ring-blue-800 bg-blue-800 p-1 text-white"
              >
                {"-->"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
