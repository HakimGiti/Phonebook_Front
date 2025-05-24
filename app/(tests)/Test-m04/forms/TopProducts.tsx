import styles from "@/styles/home.module.css";

const FormTopProducts = () => {
  return (
    <div>
      {/* Top Products = Table-2 ---------------------- */}
      <div className="flex flex-col px-6 pb-3 mx-6 bg-white shadow">
        {/* T2-------- Title */}
        <div className="h-20 py-6 text-xl font-extrabold text-gray-800">
          Top Products
        </div>
        {/* T2--------- Head Row */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 px-4 py-1 h-16 min-w-fit text-center items-center font-thin text-gray-600 border-t-2">
          <div className="text-start min-w-max mr-10">Product Name</div>
          <div className="hidden sm:block">Category</div>
          <div className="">Price</div>
          <div className="">Sold</div>
          <div className="">Profit</div>
        </div>
        {/* T2--------- Main Rows */}
        {/* T2--------- R1 */}
        <div className="grid grid-cols-4  sm:grid-cols-5 gap-4 p-3 text-sm text-center items-center justify-center font-semibold text-gray-600 border-t-2">
          <div className="block sm:flex items-center gap-3">
            <img
              className="my-3"
              width={60}
              src="https://demo.tailadmin.com/src/images/product/product-01.png"
              alt="Brand"
            ></img>
            <div className="text-start text-xs min-w-max">
              Apple Watch Series 7
            </div>
          </div>
          <div className="hidden">Electronics</div>
          <div className="">$269</div>
          <div>22</div>
          <div className="text-green-500">%45</div>
        </div>
        {/* T2--------- R2 */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-3 text-sm text-center items-center justify-center font-semibold text-gray-600 border-t-2">
          <div className="block sm:flex items-center gap-3 shrink-0">
            <img
              className="my-3"
              width={60}
              src="https://demo.tailadmin.com/src/images/product/product-02.png"
              alt="Brand"
            ></img>
            <div className="text-start text-xs min-w-max">Macbook Pro M1</div>
          </div>
          <div className="hidden">Electronics</div>
          <div className="">$546</div>
          <div>34</div>
          <div className="text-green-500">$125</div>
        </div>
        {/* T2--------- R3 */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-3 text-sm text-center items-center justify-center font-semibold text-gray-600 border-t-2">
          <div className="block sm:flex items-center gap-3 shrink-0">
            <img
              className="my-3"
              width={60}
              src="https://demo.tailadmin.com/src/images/product/product-03.png"
              alt="Brand"
            ></img>
            <div className="text-start text-xs min-w-max">Dell Inspiron 15</div>
          </div>
          <div className="hidden">Electronics</div>
          <div className="">$443</div>
          <div>64</div>
          <div className="text-green-500">$247</div>
        </div>
        {/* T2--------- R4 */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-3 text-sm text-center items-center justify-center font-semibold text-gray-600 border-t-2">
          <div className="block sm:flex items-center gap-3 shrink-0">
            <img
              className="my-3"
              width={60}
              src="https://demo.tailadmin.com/src/images/product/product-04.png"
              alt="Brand"
            ></img>
            <div className="text-start text-xs min-w-max">HP Probook 450</div>
          </div>
          <div className="hidden">Electronics</div>
          <div className="">$499</div>
          <div>72</div>
          <div className="text-green-500">$103</div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className={styles.shape1}>home.module.css</div>
    </div>
  );
};

export default FormTopProducts;
