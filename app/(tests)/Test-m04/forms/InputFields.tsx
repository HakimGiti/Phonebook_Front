const FormInputFields = () => {
    return (
        <div>
               {/* Input Fields = Left-Form-1 (LF1) ---------------------- */}
               <div className="flex flex-col mx-6 mb-10 bg-white shadow shadow-gray-300">
                  {/* LF1-------- Title */}
                  <div className="inline-flex px-6 h-14 text-start items-center text-md font-bold text-gray-800 ring-1 ring-gray-200">
                    Input Fields
                  </div>
                  {/* LF1-------- Main */}
                  <div className="flex-row p-6 text-start items-center text-sm font-bold text-gray-800 shadow shadow-gray-300">
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Default Input
                    </label>
                    {/* LF1--------item-1 */}
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Default Input"
                        className="h-12 w-full px-4 rounded-lg text-lg font-thin ring-1 ring-gray-200 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                      ></input>
                    </div>
                    {/* LF1--------item-2 */}
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Active Input
                    </label>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Active Input"
                        className="h-12 w-full px-4 rounded-lg text-lg font-thin ring-1 ring-blue-600 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                      ></input>
                    </div>
                    {/* LF1--------item-3 */}
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Disabled label
                    </label>
                    <div className="flex flex-col">
                      <input
                        id="inputdisableItem3LF1"
                        //onClick={han0dleClickdisInputLF1}
                        type="text"
                        disabled
                        //readOnly
                        placeholder="Disabled label"
                        className="h-12 w-full px-4 rounded-lg text-lg font-thin ring-1 read-only:ring-gray-200 focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                      ></input>
                    </div>
                  </div>
                </div>
        </div>
    );
}

export default FormInputFields;