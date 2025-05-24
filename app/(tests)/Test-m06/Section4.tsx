import { ImageCustom } from "./components/ImageCustom";

const Section4 = () => {
  return (
    <div>
      <section className="h-fit bg-inherit">
        <div className="container mx-auto flex flex-col">
          <div className="flex flex-col justify-center items-center md:flex md:flox-col px-6 py-6">
            <p className="mt-24 mb-12 text-4xl font-stretch-90% font-bold">
              OUR SERVICES
            </p>

            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex flex-col md:w-1/3 p-4 items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] bg-white text-black hover:text-white hover:bg-amber-500 transition duration-300">
                <div className="w-16 py-4 mx-auto">
                  <ImageCustom alt="ImageS1" image="/images/s1.png" />
                </div>
                <div className="mt-4 items-center font-semibold text-2xl tracking-tight">
                  Maintenance
                </div>
                <div className="mt-3 font-medium text-center leading-6 scale-90">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </div>
              </div>

              <div className="flex flex-col w-full md:w-1/3 p-4 items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] bg-white text-black hover:text-white hover:bg-amber-500 transition duration-300">
                <div className="w-16 py-4 mx-auto">
                  <ImageCustom alt="ImageS1" image="/images/s2.png" />
                </div>

                <div className="mt-4 items-center font-semibold text-2xl tracking-tight">
                  Electrical
                </div>
                <div className="mt-3 font-medium text-center leading-6 scale-90">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </div>
              </div>

              <div className="flex flex-col w-full md:w-1/3 p-4 items-center justify-center shadow-[0_0_10px_2px_rgba(0,0,0,0.25)] bg-white text-black hover:text-white hover:bg-amber-500 transition duration-300">
                <div className="w-16 py-4 mx-auto">
                  <ImageCustom alt="ImageS1" image="/images/s3.png" />
                </div>
                <div className="mt-4 items-center font-semibold text-2xl tracking-tight">
                  Plumbing
                </div>
                <div className="mt-3 font-medium text-center leading-6 scale-90">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-10 mx-auto mb-20 w-48 h-12 text-lg font-bold ring-1 ring-blue-800 bg-blue-800 p-1 text-white hover:text-blue-800 hover:border-blue-800 hover:bg-inherit"
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
