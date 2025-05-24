import SvgRepair from "./public/images/1repair.svg";
import SvgImprove from "./public/images/2improve.svg";
import SvgMaintain from "./public/images/3maintain.svg";
import { ImageCustom } from "./components/ImageCustom";

const Section2 = () => {
  return (
    <div>
      <section className="h-fit bg-inherit">
        <div className="container mx-auto flex flex-col">
          {/* ------------------------------------------------------------------------------- */}
          <div className="flex justify-center">
            <div className="container mx-auto px-2 flex flex-col md:flex-row justify-center items-center mt-10 lg:-mt-30 gap-6 lg:absolute">
              <div className="flex h-60 w-full md:w-1/3 items-center justify-center shadow-2xl bg-white text-sky-700 hover:text-white hover:bg-amber-500 transition duration-200">
                <div className="flex flex-col items-center gap-4 ">
                  <SvgRepair className="h-24 w-24" />
                  <div className="pt-1 text-xl font-bold">REPAIR</div>
                </div>
              </div>
              <div className="flex h-60 w-full md:w-1/3 items-center justify-center shadow-2xl bg-amber-500 text-white">
                <div className="flex flex-col items-center gap-4">
                  <SvgImprove className="h-24 w-24" />
                  <div className="pt-1 text-xl font-bold">IMPROVE</div>
                </div>
              </div>
              <div className="flex h-60 w-full md:w-1/3 items-center justify-center shadow-2xl bg-white text-sky-700 hover:text-white hover:bg-amber-500 transition duration-200">
                <div className="flex flex-col items-center gap-4">
                  <SvgMaintain className="h-24 w-24" />
                  <div className="pt-1 text-xl font-bold">MAINTAIN</div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------- */}
          <div className="mt-28 mb-28 gap-10 items-start md:items-center md:flex md:flox-col px-6 py-6 lg:items-center lg:mt-52 ">
            <div className="md:w-1/2 items-start">
              <p className="my-8 max-w-72 text-4xl font-stretch-90% font-bold">
                ABOUT US
              </p>
              <p className="my-8 max-w-fit">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomisedThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised
              </p>
              <button
                type="button"
                className="relative mb-20 w-48 h-12 text-lg font-bold ring-1 ring-blue-800  bg-blue-800 p-1 text-white hover:text-blue-800 hover:border-blue-800 hover:bg-inherit"
              >
                READ MORE
              </button>
            </div>
            <div className="md:w-1/2">
              <ImageCustom
                className="rounded-none"
                alt="ImageAbout"
                image="/images/about-img.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
