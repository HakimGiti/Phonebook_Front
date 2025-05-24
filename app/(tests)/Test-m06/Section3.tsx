// import { ImageCustom } from "@/components/ImageCustom";
import { ImageCustom } from "./components/ImageCustom";

const Section3 = () => {
  return (
    <div>
      <section className="h-fit bg-[#c4d6f3]">
        <div className="container mx-auto flex flex-col">
          <div className="md:my-28 gap-10 items-start md:items-center md:flex md:flox-col px-6 py-6 lg:items-center">
            <div className="hidden md:w-1/2 md:block">
              <ImageCustom
                alt="ImageProfessional"
                image="/images/professional-img.png"
              />
            </div>
            <div className="md:w-1/2 items-start">
              <p className="my-8 max-w-xl text-4xl text-blue-800 font-stretch-90% font-bold">
                WE PROVIDE PROFESSIONAL HOME SERVICES.
              </p>
              <p className="my-8 max-w-fit">
                randomised words which do not look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there is not anything embarrassing hidden in the middle of
                text. All randomised words which do not look even slightly
              </p>
              <button
                type="button"
                className="relative mb-20 w-48 h-12 text-lg font-bold ring-1 ring-amber-500  bg-amber-500 p-1 text-white hover:text-amber-500 hover:border-amber-500 hover:bg-inherit"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
