import { ImageCustom } from "@/components/ImageCustom";

const Section1 = () => {
  return (
    <div>
      <section className="h-fit bg-[#c4d6f3]">
        <div className="container mx-auto flex flex-col">
          <div className="items-start md:items-center md:flex md:flox-col px-6 py-6 lg:items-center">
            <div className="md:w-1/2 items-start">
              <p className="my-8 max-w-72 text-4xl text-blue-800 font-stretch-90% font-bold">
                Repair and Maintenance Services
              </p>
              <p className="my-8 max-w-fit text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              {/*focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden */}
              <button
                type="button"
                className="relative mb-20 w-48 h-12 text-lg font-bold rounded-md ring-1 ring-amber-500  bg-amber-500 p-1 text-white hover:text-amber-500 hover:border-amber-500 hover:bg-inherit"
              >
                CONTACT US
              </button>
            </div>
            <div className="md:w-1/2">
              <ImageCustom alt="ImageSlider" image="/images/slider-img.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
