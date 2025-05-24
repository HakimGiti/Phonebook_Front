const FormFileUploads = () => {
    return (
        <div>
                {/* File Uploads = Left-Form-4 (LF4) ---------------------- */}
                <div className="flex flex-col mx-6 mb-10 bg-white shadow shadow-gray-300">
                  {/* LF4-------- Title */}
                  <div className="inline-flex px-6 h-14 text-start items-center text-md font-bold text-gray-800 ring-1 ring-gray-200">
                    File Uploads
                  </div>
                  {/* LF4-------- Main */}
                  <div className="flex-row px-6 py-3 text-start items-center text-sm font-bold text-gray-800 shadow shadow-gray-300">
                    {/* LF4--------item-1 */}
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Attach file
                    </label>
                    <div className="flex">
                      <button className="flex flex-row h-14 w-full items-center justify-end">
                        <input
                          type="file"
                          placeholder="No file chosen"
                          className="w-full cursor-pointer file:cursor-pointer file:border-none file:p-3 file:mr-3 file:text-gray-600 rounded-md text-lg text-gray-500 font-thin ring-1 ring-gray-200 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                        />
                      </button>
                    </div>
                    {/* LF4--------item-2 */}
                    <label
                      htmlFor=""
                      className="inline-flex h-14 items-center text-md font-bold text-gray-800"
                    >
                      Attach file
                    </label>
                    <div className="flex">
                      <button className="flex flex-row h-14 w-full items-center justify-end">
                        <input
                          type="file"
                          placeholder="No file chosen"
                          className="w-full h-14 p-3 pl-5 cursor-default file:h-8 file:mr-5 file:rounded file:scale-125 file:text-xs file:border-t-0  file:border-l-0 file:border-b-gray-100  file:border-r-gray-100  file:text-gray-600 rounded-md text-lg text-gray-500 font-thin ring-1 ring-gray-200 focus:border-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-0 focus:ring-offset-gray-800 focus:outline-none"
                        />
                      </button>
                    </div>
                    <div className="h-5"> </div>
                  </div>
                </div>                
        </div>
    );
}

export default FormFileUploads;