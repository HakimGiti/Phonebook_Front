import { useState } from "react";

const FormToggleSwitchInputs = () => {
  
    const [bool21, setBool21] = useState("false"); //UseState =============
    const han0dleClicktogLF21 = () => {
      //Function ================== Tables
      const txt01 = document.getElementById("togFL21");
      if (bool21) {
        txt01.className = "flex w-14 h-8 rounded-full bg-gray-200 justify-end";
      } else {
        txt01.className = "flex w-14 h-8 rounded-full bg-gray-200 justify-start";
      }
      setBool21(!bool21);
      //alert(bool21);
    };

    const [bool22, setBool22] = useState("false"); //UseState =============
    const han0dleClicktogLF22 = () => {
      //Function ================== Tables
      const txt01 = document.getElementById("togFL22");
      if (bool22) {
        txt01.className =
          "flex w-14 h-5 items-center rounded-full bg-gray-200 shadow-inner justify-end";
      } else {
        txt01.className =
          "flex w-14 h-5 items-center rounded-full bg-gray-200 shadow-inner justify-start";
      }
      setBool22(!bool22);
      //alert(bool22);
    };
    
    const [bool23, setBool23] = useState("false"); //UseState =============
    const han0dleClicktogLF23 = () => {
      //Function ================== Tables
      const txt01 = document.getElementById("togFL23");
      const txt02 = document.getElementById("svgtogFL23X");
      const txt03 = document.getElementById("svgtogFL23Y");
  
      if (bool23) {
        txt01.className = "flex w-14 h-8 rounded-full bg-gray-200 justify-end";
        txt02.className =
          "hidden rounded-full m-1 w-6 h-6 items-center justify-center bg-white";
        txt03.className =
          "block  rounded-full m-1 w-6 h-6 items-center justify-center bg-blue-700";
      } else {
        txt01.className = "flex w-14 h-8 rounded-full bg-gray-200 justify-start";
        txt02.className =
          "block  rounded-full m-1 w-6 h-6 items-center justify-center bg-white";
        txt03.className =
          "hidden rounded-full m-1 w-6 h-6 items-center justify-center bg-blue-700";
      }
      setBool23(!bool23);
      //alert(bool23);
    };
  
    const [bool24, setBool24] = useState("false"); //UseState =============
    const han0dleClicktogLF24 = () => {
      //Function ==================
      const txt01 = document.getElementById("togFL24");
      if (bool24) {
        txt01.className =
          "flex w-14 h-8 items-center rounded-full bg-blue-700 justify-end";
      } else {
        txt01.className =
          "flex w-14 h-8 items-center rounded-full bg-black justify-start";
      }
      setBool24(!bool24);
      //alert(bool24);
    };
  

  return (
        <div>
                {/* Toggle Switch Inputs = Left-Form-2 (LF2) ---------------------- */}
                <div className="flex flex-col mx-6 mb-10 bg-white shadow shadow-gray-300">
                  {/* LF2-------- Title */}
                  <div className="inline-flex px-6 py-6 h-14 text-start items-center text-md font-bold text-gray-800 ring-1 ring-gray-200">
                    Toggle Switch Inputs
                  </div>
                  {/* LF2-------- Main */}
                  <div className="p-6">
                    {/* LF2--------------------------------Tog1 */}
                    <div
                      className="flex-row text-start items-center my-2 text-sm font-bold text-gray-800"
                      onClick={han0dleClicktogLF21}
                    >
                      <button className="flex w-full h-10 items-center">
                        <div
                          id="togFL21"
                          className="flex w-14 h-8 items-center justify-start rounded-full bg-gray-200"
                        >
                          <div className="flex rounded-full m-1 w-6 h-6 bg-white ring-1 ring-gray-200"></div>
                        </div>
                      </button>
                    </div>
                    {/* LF2--------------------------------Tog2 */}
                    <div
                      className="flex-row text-start items-center my-2 text-sm font-bold text-gray-800"
                      onClick={han0dleClicktogLF22}
                    >
                      <button className="flex w-full h-10 items-center">
                        <div
                          id="togFL22"
                          className="flex w-14 h-5 items-center justify-start rounded-full bg-gray-200 shadow-inner"
                        >
                          <div className="flex rounded-full p-1 w-7 h-7 bg-white ring-1 ring-gray-200 shadow"></div>
                        </div>
                      </button>
                    </div>
                    {/* LF2--------------------------------Tog3 */}
                    <div
                      className="flex-row text-start items-center my-2 text-sm font-bold text-gray-800"
                      onClick={han0dleClicktogLF23}
                    >
                      <button className="flex w-full h-10 items-center">
                        <div
                          id="togFL23"
                          className="flex w-14 h-8 items-center justify-start rounded-full bg-gray-200"
                        >
                          {/* svgX------------------------------- */}
                          <div
                            id="svgtogFL23X"
                            className="block rounded-full m-1 w-6 h-6 items-center justify-center bg-white"
                          >
                            <svg
                              className="m-1 h-4 w-4 stroke-current"
                              fill="none"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </div>
                          {/* svgY------------------------------- */}
                          <div
                            id="svgtogFL23Y"
                            className="hidden rounded-full m-1 w-6 h-6 items-center justify-center bg-blue-700"
                          >
                            <svg
                              className="m-1 w-4 h-4 fill-white stroke-white"
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill=""
                                stroke=""
                                strokeWidth="0.4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                    {/* LF2--------------------------------Tog4 */}
                    <div
                      className="flex-row text-start items-center my-2 text-sm font-bold text-gray-800"
                      onClick={han0dleClicktogLF24}
                    >
                      <button className="flex w-full h-10 items-center">
                        <div
                          id="togFL24"
                          className="flex w-14 h-8 items-center justify-start rounded-full bg-black"
                        >
                          <div className="flex rounded-full m-1 w-6 h-6 bg-white ring-1 ring-gray-200"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* LF2--------------------------------End of Toggles */}
                </div>
        </div>
    );
}

export default FormToggleSwitchInputs;