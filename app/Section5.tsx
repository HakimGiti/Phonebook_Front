import Part1 from "./Part1";
import Part2 from "./Part2";

const Section5 = () => {
  return (
    <div>
      <section className="h-fit bg-inherit">
        <div className="container mx-auto max-w-max flex flex-col justify-center md:flex-row">
          <div className="flex flex-col justify-center items-center md:flox-row px-6 py-6 lg:items-center">
            <p className="mb-20 text-4xl font-stretch-90%% font-bold">
              WHAT OUR CLIENTS SAY
            </p>
            {/* ############################################################### Animation Part */}
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10">
              <Part1 />
              <Part2 />
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
