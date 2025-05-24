import { ImageCustom } from "./components/ImageCustom";

const Section6 = () => {
  return (
    <div>
      <section className="h-fit bg-inherit">
        <div className="container mx-auto flex flex-col">
          <div className="items-center px-6 py-6">
            <p className="mt-24 mb-12 text-4xl font-stretch-90%% font-bold">
              CONTACT US
            </p>

            {/* Tables ------------------------------------------------------ */}
            <div className="flex flex-col md:flex-row w-full gap-10">
              <div className="flex w-full md:w-1/2">
                <div className="flex flex-col w-full gap-10 font-semibold ">
                  <div className="ring ring-gray-200 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)]">
                    <input
                      type="text"
                      placeholder="Name"
                      className="h-12 w-full px-4 focus:border-none focus:ring focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                    ></input>
                  </div>
                  <div className="ring ring-gray-200 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)]">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="h-12 w-full px-4 focus:border-none focus:ring focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                    ></input>
                  </div>
                  <div className="ring ring-gray-200 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)]">
                    <input
                      type="text"
                      placeholder="Email"
                      className="h-12 w-full px-4 focus:border-none focus:ring focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                    ></input>
                  </div>
                  <div className="ring ring-gray-200 shadow-[0_0_10px_1px_rgba(0,0,0,0.15)]">
                    <input
                      type="text"
                      placeholder="Message"
                      className="h-40 w-full px-4 focus:border-none focus:ring focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="flex w-full md:w-1/2">
                <ImageCustom alt="ImageS1" image="/images/googlemap.png" />
              </div>
            </div>
            <button
              type="button"
              className="mt-10 mx-auto mb-20 w-48 h-12 text-lg font-bold ring-1 ring-blue-800  bg-blue-800 p-1 text-white hover:text-blue-800 hover:border-blue-800 hover:bg-inherit"
            >
              SEND
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section6;
