import SvgLocation from "../public/images/location.svg";
import SvgPhoneCall from "../public/images/phone-call-2.svg";
import SvgEmail from "../public/images/email-1.svg";
import SvgFaceBook from "../public/images/facebook.svg";
import Svgtwitter from "../public/images/twitter.svg";
import SvgInstagram from "../public/images/instagram.svg";
import SvgYoutube from "../public/images/youtube.svg";

const Section7 = () => {
  return (
    <div>
      <section className="h-fit bg-[#06062be3]">
        <div className="container mx-auto h-fit flex flex-col">
          <div className="flex flex-col justify-center items-center md:flex md:flox-col px-6 py-6 lg:items-center">
            <p className="mt-24 mb-10 text-white text-2xl font-stretch-90%% font-bold">
              GET IN TOUCH
            </p>

            <div className="mx-auto flex flex-col md:flex-row justify-center items-center">
              {/* Location ---------------------------------- */}
              <a
                href="#"
                target=""
                className="flex flex-col h-32 my-3 md:h-40 w-60 items-center justify-center bg-inherit text-blue-800 hover:text-amber-500"
              >
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="flex justify-center items-center h-10 w-10 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    {/* <div className="h-0.5 w-full bg-white"></div> */}
                  </div>
                  <div className="flex justify-center items-center h-20 w-20 mx-auto rounded-full bg-current">
                    <SvgLocation className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex justify-center items-center h-0 w-0 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    <div className="h-0 w-0 md:h-0.5 md:w-full bg-white"></div>
                  </div>
                </div>
                <div className="mt-1 h-6 md:mt-4 md:h-10 items-center font-semibold text-base text-white tracking-tighter">
                  Lorem Ipsum is simply dummy text
                </div>
              </a>
              {/* Phone Call ---------------------------------- */}
              <a
                href="#"
                target=""
                className="flex flex-col h-32 my-3 md:h-40 w-60 items-center justify-center bg-inherit text-blue-800 hover:text-amber-500"
              >
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="flex justify-center items-center h-10 w-10 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    <div className="h-0.5 w-full bg-white"></div>
                  </div>
                  <div className="flex justify-center items-center h-20 w-20 mx-auto rounded-full bg-current">
                    <SvgPhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex justify-center items-center h-0 w-0 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    <div className="h-0 w-0 md:h-0.5 md:w-full bg-white"></div>
                  </div>
                </div>
                <div className="mt-1 h-6 md:mt-4 md:h-10 items-center font-semibold text-base text-white tracking-tighter">
                  +02 1234567890
                </div>
              </a>
              {/* Email ---------------------------------- */}
              <a
                href="#"
                target=""
                className="flex flex-col h-32 my-3 md:h-40 w-60 items-center justify-center bg-inherit text-blue-800 hover:text-amber-500"
              >
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="flex justify-center items-center h-10 w-10 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    <div className="h-0.5 w-full bg-white"></div>
                  </div>
                  <div className="flex justify-center items-center h-20 w-20 mx-auto rounded-full bg-current">
                    <SvgEmail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex justify-center items-center h-0 w-0 md:h-1 md:w-20 md:rotate-0 rotate-90">
                    {/* <div className="h-0 w-0 md:h-0.5 md:w-full bg-white"></div> */}
                  </div>
                </div>
                <div className="mt-1 h-6 md:mt-4 md:h-10 items-center font-semibold text-base text-white tracking-tighter">
                  demo@gmail.com
                </div>
              </a>
            </div>

            {/* GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG */}
            <p className="mt-10 mb-6 text-white text-2xl font-stretch-90%% font-bold">
              FOLLOW US
            </p>

            <div className="flex justify-around items-center mx-auto px-4 w-36 h-8 bg-white">
              <div className="flex justify-center w-1/4">
                <SvgFaceBook className="h-4 w-fit text-blue-800 hover:text-amber-500" />
              </div>
              <div className="flex justify-center w-1/4">
                <Svgtwitter className="h-4 w-fit text-blue-800 hover:text-amber-500" />
              </div>
              <div className="flex justify-center w-1/4">
                <SvgYoutube className="h-4 w-fit text-blue-800 hover:text-amber-500" />
              </div>
              <div className="flex justify-center w-1/4">
                <SvgInstagram className="h-4 w-fit text-blue-800 hover:text-amber-500" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="w-full mx-8 md:mx-32 mb-8 items-center h-1 border-2 border-t-0 border-r-0 border-l-0 border-b-white"></div>
          </div>
          <div className="flex justify-center text-white mb-6 ">
            © 2025 All Rights Reserved By Free Html Templates
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section7;
