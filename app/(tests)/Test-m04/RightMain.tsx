"use client";

import FormInputFields from "./forms/InputFields";
import FormToggleSwitchInputs from "./forms/ToggleSwitchInputs";
import FormTimeAndDate from "./forms/TimeAndDate";
import FormFileUploads from "./forms/FileUploads";
import FormTopProducts from "./forms/TopProducts";

const RightMain = () => {
  return (
    <div>
      {/*  Right Main ---------------- (Form Elements) */}
      <div>
        {/*  Forms ---------------- */}
        <div className="">
          {/*  Forms - Header ---------------- */}
          <div className="flex flex-row mt-20 h-20 mx-6 justify-between">
            {/*  Forms - Header ---------------- Left side */}
            <div className="flex flex-row items-center text-2xl font-extrabold text-gray-800">
              Form Elements
            </div>
            {/*  forms - Header ---------------- Right side */}
            <div className="flex flex-row items-center">
              <a href="#" className="text-base tracking-wide text-gray-500">
                Dashboard /
              </a>
              <div className="text-base ml-2 tracking-wide text-blue-700">
                Form Elements
              </div>
            </div>
          </div>

          {/* Left/Right Columns ---------------------- */}
          <div className="grid grid-cols-2">
            {/* Left-Columns ########################################### */}
            <div className="">
              {/* Left-Form-1 (LF1) ---------------------- */}
              <FormInputFields />
              {/* Left-Form-2 (LF2) ---------------------- */}
              <FormToggleSwitchInputs />
              {/* Left-Form-3 (LF3) ---------------------- */}
              <FormTimeAndDate />
              {/* Left-Form-4 (LF4) ---------------------- */}
              <FormFileUploads />
            </div>
            {/* Right-Columns ########################################### */}
            <div className="">
              {/* Top Products = Table-2 ---------------------- */}
              <FormTopProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMain;
