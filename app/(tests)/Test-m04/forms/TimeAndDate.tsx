const FormTimeAndDate = () => {
    return (
        <div>
                {/* Time and Date = Left-Form-3 (LF3) ---------------------- */}
                <div className="flex flex-col mx-6 mb-10 bg-white shadow shadow-gray-300">
                  {/* LF3-------- Title */}
                  <div className="inline-flex px-6 h-14 text-start items-center text-md font-bold text-gray-800 ring-1 ring-gray-200">
                    Time and Date
                  </div>
                  {/* LF3-------- Main */}
                  <div className="flex-row px-6 py-3 text-start items-center text-sm font-bold text-gray-800 shadow shadow-gray-300">
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Date picker
                    </label>
                    {/* LF3--------item-1 */}
                    <div className="flex">
                      <button className="flex flex-row w-full gap-4 items-center justify-end">
                        <input
                          type="date"
                          placeholder="mm/dd/yyyy"
                          className="h-12 w-full px-4 rounded-lg text-lg font-thin ring-1 ring-gray-200 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                        ></input>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="absolute w-6 h-6 mr-3 text-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10m-9 4h3m4 0h3m-9 4h6M5 7h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                          />
                        </svg> */}
                      </button>
                    </div>
                    {/* LF3--------item-2 */}
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Select date
                    </label>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        className="h-12 w-full px-4 rounded-lg text-lg font-thin ring-1 ring-gray-200 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                        //className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary flatpickr-input active"
                        //data-class="flatpickr-right"
                        readOnly
                      ></input>
                    </div>
                    <div className="h-5"> </div>
                  </div>
                </div>
                
        </div>
    );
}

export default FormTimeAndDate;