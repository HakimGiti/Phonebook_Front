"use client";
//import Image from "next/image";
import { useState } from "react";

const Home02 = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = () => {
    setCounter(counter + 1);
    alert(counter);
  };
  return (
    <div className="h-full bg-white">
      {/* Some Back up ============================  */}
      {/* <div className="hidden md:block"> */}
      {/* <div className="grid grid-cols-2 gap-4 item-center justify-between h-200 bg-gray-800"> */}
      {/* className="flex flex-row items-center justify-center gap-4 font-mono text-sm" */}
      {/* className="w-2xl ml-2xl mt-36 justify-center bg-white" */}
      <div className="hidden lg:block">
        <div className="block h-14 text-blue-600 text-1xl bg-gray-100"></div>
      </div>

      <div className="block h-16 mx-auto text-blue-600 text-1xl bg-gray-100">
        <div className="flex flex-row h-16 items-center justify-between gap-4">
          <div className="">
            <div className="mt-40 ml-32 md:ml-0 lg:mt-0 lg:grow lg:basis-0">
              <svg
                aria-hidden="true"
                viewBox="0 0 183 48"
                className="h-12 w-auto text-slate-900"
              >
                <path
                  fill="#3B82F6"
                  fillRule="evenodd"
                  d="M1.172 21.172a4 4 0 000 5.656l20 20a4 4 0 105.656-5.656l-20-20a4 4 0 00-5.656 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#93C5FD"
                  fillRule="evenodd"
                  d="M26.828 6.828a4 4 0 10-5.656-5.656l-19 19A3.987 3.987 0 015 19a3.98 3.98 0 012.827 1.172L10.657 23 26.828 6.828z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#0F172A"
                  d="M52 32V15.2h5.736c1.968 0 3.584.352 4.848 1.056 1.28.688 2.224 1.664 2.832 2.928.624 1.248.936 2.72.936 4.416 0 1.696-.312 3.176-.936 4.44-.608 1.248-1.552 2.224-2.832 2.928-1.264.688-2.88 1.032-4.848 1.032H52zm3.072-2.64h2.52c1.408 0 2.52-.224 3.336-.672a3.958 3.958 0 001.752-1.968c.352-.864.528-1.904.528-3.12 0-1.2-.176-2.232-.528-3.096a3.944 3.944 0 00-1.752-1.992c-.816-.464-1.928-.696-3.336-.696h-2.52V29.36zm18.263 2.928c-1.2 0-2.264-.256-3.192-.768a5.559 5.559 0 01-2.184-2.16c-.529-.928-.793-2-.793-3.216 0-1.232.257-2.328.769-3.288a5.687 5.687 0 012.16-2.232c.927-.544 2.016-.816 3.264-.816 1.168 0 2.2.256 3.096.768a5.407 5.407 0 012.088 2.112c.511.88.767 1.864.767 2.952 0 .176-.008.36-.023.552 0 .192-.009.392-.025.6h-9.047c.063.928.383 1.656.96 2.184.591.528 1.303.792 2.136.792.623 0 1.143-.136 1.56-.408.431-.288.752-.656.96-1.104h3.12a5.68 5.68 0 01-1.128 2.064 5.423 5.423 0 01-1.92 1.44c-.753.352-1.609.528-2.569.528zm.024-9.984a3.23 3.23 0 00-1.992.648c-.577.416-.945 1.056-1.105 1.92h5.928c-.047-.784-.335-1.408-.864-1.872-.527-.464-1.183-.696-1.967-.696zm12.927 9.984c-1.216 0-2.288-.264-3.216-.792a5.851 5.851 0 01-2.208-2.208c-.528-.944-.792-2.024-.792-3.24 0-1.216.264-2.296.792-3.24A5.851 5.851 0 0183.07 20.6c.928-.528 2-.792 3.216-.792 1.52 0 2.8.4 3.84 1.2 1.04.784 1.704 1.872 1.992 3.264h-3.24a2.299 2.299 0 00-.96-1.344c-.464-.336-1.016-.504-1.656-.504-.848 0-1.568.32-2.16.96-.592.64-.888 1.528-.888 2.664 0 1.136.296 2.024.888 2.664.592.64 1.312.96 2.16.96.64 0 1.192-.16 1.656-.48.48-.32.8-.776.96-1.368h3.24c-.288 1.344-.952 2.424-1.992 3.24-1.04.816-2.32 1.224-3.84 1.224zm12.903 0c-1.2 0-2.264-.256-3.192-.768a5.559 5.559 0 01-2.184-2.16c-.528-.928-.792-2-.792-3.216 0-1.232.256-2.328.768-3.288a5.687 5.687 0 012.16-2.232c.928-.544 2.016-.816 3.264-.816 1.168 0 2.2.256 3.096.768a5.407 5.407 0 012.088 2.112c.512.88.768 1.864.768 2.952 0 .176-.008.36-.024.552 0 .192-.008.392-.024.6h-9.048c.064.928.384 1.656.96 2.184.592.528 1.304.792 2.136.792.624 0 1.144-.136 1.56-.408.432-.288.752-.656.96-1.104h3.12a5.68 5.68 0 01-1.128 2.064 5.423 5.423 0 01-1.92 1.44c-.752.352-1.608.528-2.568.528zm.024-9.984a3.23 3.23 0 00-1.992.648c-.576.416-.944 1.056-1.104 1.92h5.928c-.048-.784-.336-1.408-.864-1.872-.528-.464-1.184-.696-1.968-.696zm7.096 14.976V20.096h2.736l.336 1.704c.384-.528.888-.992 1.512-1.392.64-.4 1.464-.6 2.472-.6 1.12 0 2.12.272 3 .816a5.846 5.846 0 012.088 2.232c.512.944.768 2.016.768 3.216 0 1.2-.256 2.272-.768 3.216a5.894 5.894 0 01-2.088 2.208c-.88.528-1.88.792-3 .792-.896 0-1.68-.168-2.352-.504a4.24 4.24 0 01-1.632-1.416v6.912h-3.072zm6.408-7.68c.976 0 1.784-.328 2.424-.984.64-.656.96-1.504.96-2.544s-.32-1.896-.96-2.568c-.64-.672-1.448-1.008-2.424-1.008-.992 0-1.808.336-2.448 1.008-.624.656-.936 1.504-.936 2.544s.312 1.896.936 2.568c.64.656 1.456.984 2.448.984zM125.36 32c-1.248 0-2.248-.304-3-.912-.752-.608-1.128-1.688-1.128-3.24v-5.184h-2.04v-2.568h2.04l.36-3.192h2.712v3.192h3.216v2.568h-3.216v5.208c0 .576.12.976.36 1.2.256.208.688.312 1.296.312h1.488V32h-2.088zm5.014-13.752c-.56 0-1.024-.168-1.392-.504-.352-.336-.528-.76-.528-1.272s.176-.928.528-1.248c.368-.336.832-.504 1.392-.504.56 0 1.016.168 1.368.504.368.32.552.736.552 1.248s-.184.936-.552 1.272c-.352.336-.808.504-1.368.504zM128.838 32V20.096h3.072V32h-3.072zm12.518.288c-1.696 0-3.152-.36-4.368-1.08a7.383 7.383 0 01-2.808-3.048c-.656-1.312-.984-2.824-.984-4.536 0-1.712.328-3.224.984-4.536.656-1.312 1.592-2.336 2.808-3.072 1.216-.736 2.672-1.104 4.368-1.104 2.016 0 3.664.504 4.944 1.512 1.296.992 2.104 2.392 2.424 4.2h-3.384c-.208-.912-.656-1.624-1.344-2.136-.672-.528-1.568-.792-2.688-.792-1.552 0-2.768.528-3.648 1.584-.88 1.056-1.32 2.504-1.32 4.344 0 1.84.44 3.288 1.32 4.344.88 1.04 2.096 1.56 3.648 1.56 1.12 0 2.016-.24 2.688-.72.688-.496 1.136-1.176 1.344-2.04h3.384c-.32 1.728-1.128 3.08-2.424 4.056-1.28.976-2.928 1.464-4.944 1.464zm14.287 0c-1.152 0-2.192-.264-3.12-.792a5.957 5.957 0 01-2.184-2.184c-.528-.944-.792-2.032-.792-3.264 0-1.232.272-2.312.816-3.24a5.905 5.905 0 012.184-2.208c.928-.528 1.968-.792 3.12-.792 1.136 0 2.16.264 3.072.792a5.68 5.68 0 012.184 2.208c.544.928.816 2.008.816 3.24 0 1.232-.272 2.32-.816 3.264a5.727 5.727 0 01-2.184 2.184c-.928.528-1.96.792-3.096.792zm0-2.664c.8 0 1.496-.296 2.088-.888.592-.608.888-1.504.888-2.688 0-1.184-.296-2.072-.888-2.664-.592-.608-1.28-.912-2.064-.912-.816 0-1.52.304-2.112.912-.576.592-.864 1.48-.864 2.664 0 1.184.288 2.08.864 2.688.592.592 1.288.888 2.088.888zM163.046 32V20.096h2.712l.24 2.016a4.21 4.21 0 011.584-1.68c.704-.416 1.528-.624 2.472-.624 1.472 0 2.616.464 3.432 1.392.816.928 1.224 2.288 1.224 4.08V32h-3.072v-6.432c0-1.024-.208-1.808-.624-2.352-.416-.544-1.064-.816-1.944-.816-.864 0-1.576.304-2.136.912-.544.608-.816 1.456-.816 2.544V32h-3.072zm13.714 0v-9.336h-1.632v-2.568h1.632v-1.392c0-1.44.36-2.464 1.08-3.072.736-.608 1.728-.912 2.976-.912h1.32v2.616h-.84c-.528 0-.904.104-1.128.312-.224.208-.336.56-.336 1.056v1.392h2.568v2.568h-2.568V32h-3.072z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="absolute w-screen justify-center shrink-0">
            <div className="flex flex-row items-center justify-center gap-4 font-mono text-sm">
              <div className="my-4">04-06 of April, 2022</div>
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="h-1.5 w-1.5 items-center overflow-visible fill-current stroke-current"
              >
                <path
                  d="M3 0L6 3L3 6L0 3Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div>Los Angeles, CA</div>
            </div>
          </div>
          <a
            href="#"
            onClick={handleCounter}
            className="hidden mt-40 lg:mt-0 lg:shrink-0 sm:block h-14 w-auto rounded-2xl px-4 py-4 items-center text-base font-semibold text-white bg-blue-600"
          >
            Get your tickets
          </a>
        </div>
      </div>

      <div className="block md:hidden"></div>
      {/* MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM */}
      {/* MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM */}

      <div className="mt-36 mx-auto h-auto container items-center justify-center lg:w-max bg-white">
        <p className="mb-6 text-4xl font-bold text-blue-600 md:text-7xl">
          A design conference for the dark side.
        </p>

        <p className="mb-6 h-auto font-normal text-2xl tracking-tight text-blue-800 ">
          The next generation of web users are tech-savvy and suspicious. They
          know how to use dev tools, they can detect a phishing scam from a mile
          away, and they certainly aren’t accepting any checks from Western
          Union.
        </p>
        <p className="mb-6 h-auto font-normal text-2xl tracking-tight text-blue-800 ">
          At DeceptiConf you’ll learn about the latest dark patterns being
          developed to trick even the smartest visitors, and you’ll learn how to
          deploy them without ever being detected.
        </p>
        <a
          href="#"
          className="mb-6 inline-flex sm:hidden h-14 w-full justify-center rounded-2xl px-4 py-4 items-center text-base font-semibold text-white bg-blue-600"
        >
          Get your tickets
        </a>

        <div className="grid grid-cols-2 sm:justify-start sm:shrink-0 lg:flex lg:col-span-2 gap-10 item-center justify-between bg-gray-50">
          <div className="m-6 h-auto font-normal text-sm tracking-widest text-blue-800 bg-inherit">
            <div className="block sm:flex sm:justify-center lg:justify-start">
              Speakers
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-xl tracking-normal text-blue-800 bg-inherit">
              18
            </div>
          </div>
          <div className="m-6 h-auto font-normal text-sm tracking-widest text-blue-800 bg-inherit">
            <div className="block sm:flex sm:justify-center lg:justify-start">
              People Attending
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-xl tracking-normal text-blue-800 bg-inherit">
              2,091
            </div>
          </div>

          <div className="m-6 h-auto font-normal text-sm tracking-widest text-blue-800 bg-inherit">
            <div className="block sm:flex sm:justify-center lg:justify-start">
              Venue
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-xl tracking-normal text-blue-800 bg-inherit">
              Staples Center
            </div>
          </div>

          <div className="m-6 h-auto font-normal text-sm tracking-widest text-blue-800 bg-inherit">
            <div className="block sm:flex sm:justify-center lg:justify-start">
              Location
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-xl tracking-normal text-blue-800 bg-inherit">
              Los Angeles
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 mx-auto h-auto px-10 max-w-4xl items-center justify-center lg:w-max bg-white">
        <div className="h-full font-normal text-5xl tracking-tight text-blue-600">
          Speakers
        </div>
        <div className="mt-4 font-normal text-2xl tracking-tight text-blue-800">
          Learn from the experts on the cutting-edge of deception at the most
          sinister companies.
        </div>
      </div>

      <div className="block mx-10 lg:flex lg:flex-row sm:justify-center lg:justify-center">
        <div className="flex gap-2 m-6 md:flex md:flex-row sm:justify-center sm:gap-6 lg:flex-col lg:justify-start lg:gap-8">
          {/* Item1 */}
          <div className="m-6 h-auto font-normal text-sm text-blue-600 bg-inherit shrink-0">
            <div className="block sm:flex sm:flex-row sm:justify-center lg:justify-start">
              Opening Day
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-2xl tracking-normal text-blue-900 bg-inherit">
              April 4
            </div>
          </div>
          <div className="m-6 h-auto font-normal text-sm text-gray-500 bg-inherit shrink-0">
            <div className="block sm:flex sm:justify-center lg:justify-start font-thin">
              Speakers & Workshops
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-2xl tracking-normal text-blue-900 bg-inherit">
              April 5
            </div>
          </div>
          <div className="m-6 h-auto font-normal text-sm text-gray-500 bg-inherit shrink-0">
            <div className="block sm:flex sm:justify-center lg:justify-start font-mono">
              Interviews
            </div>
            <div className="block sm:flex sm:justify-center lg:justify-start mt-3 h-auto w-full font-semibold text-2xl tracking-normal text-blue-900 bg-inherit">
              April 6
            </div>
          </div>
        </div>
        {/* Item2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-1 item-center justify-between bg-inherit sm:justify-start md:justify-center">
          {/* row1 -----------------------11 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Steven McHail
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              Designer at Globex Corporation
            </div>
          </div>
          {/* ---------------------------12 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Jaquelin Isch
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              UX Design at InGen
            </div>
          </div>
          {/* ---------------------------13 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Dianne Guilianelli
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              General Manager at Initech
            </div>
          </div>
          {/*  row2 ---------------------21 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Ronni Cantadore
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              Design Engineer at Weyland-Yutani
            </div>
          </div>
          {/* ---------------------------22 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Erhart Cockrin
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              Product Lead at Cyberdyne Systems
            </div>
          </div>
          {/* ---------------------------23 */}
          <div className="m-6 hover:p-1">
            <div className="block p-2 border-black border-2 rounded-3xl sm:flex sm:justify-center lg:justify-center bg-white">
              <img
                className="block object-cover rounded-3xl scale-100 hover:scale-110 transition-transform duration-700"
                src="https://www.w3schools.com/html/pic_trulli.jpg"
              ></img>
            </div>
            <div className="block m-4 font-bold text-xl tracking-tight justify-start text-blue-950 bg-inherit">
              Parker Johnson
            </div>
            <div className="block m-4 font-bold text-lg tracking-tight justify-start text-gray-400 bg-inherit">
              UI Designer at MomCorp
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------- End of grid */}

      <div className="mt-36 mx-auto h-auto px-10 max-w-6xl items-center justify-center lg:w-max bg-white">
        {/* Title & Subject ------------------------ */}
        <div className=" max-w-4xl justify-start lg:w-max bg-white">
          <p className="mb-6 text-4xl font-bold tracking-tighter text-blue-600 md:text-5xl">
            Our three day schedule is jam-packed with brilliant, creative, evil
            geniuses.
          </p>
          <p className="mb-6 h-auto font-normal text-2xl text-blue-900 ">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div>
      </div>

      {/* 000000000000000000000000000000000000000000000000000000 */}
      {/* 000000000000000000000000000000000000000000000000000000 */}
      {/* 000000000000000000000000000000000000000000000000000000 */}

      {/* Part_Final++ ============================= */}
      <div className="flex flex-col mt-36 px-10  mx-auto gap-10 max-w-7xl sm:flex-row lg:flex-col">
        {/* Head = Three columns ------------------------ */}
        <div className="flex flex-row gap-8 w-screen overflow-x-scroll sm:max-w-72 sm:overflow-x-hidden sm:flex-col sm:items-start lg:flex-row lg:w-auto lg:overflow-x-hidden lg:max-w-7xl">
          {/* col1 = April 4 ----------------------- */}
          <div className="mt-3 min-w-72">
            <a>
              <div className="mt-3 font-semibold text-3xl tracking-tight text-blue-900 bg-inherit">
                April 4
              </div>
              <p className="mt-3 h-auto font-semibold text-lg tracking-tight text-blue-800 ">
                The first day of the conference is focused on dark patterns for
                ecommerce.
              </p>
            </a>
          </div>
          {/* col2 = April 5 ----------------------- */}
          <div className="mt-3 min-w-72">
            <a>
              <div className="mt-3 font-semibold text-3xl tracking-tight text-blue-900 bg-inherit">
                April 5
              </div>
              <p className="mt-3 h-auto font-semibold text-lg tracking-tight text-blue-800 ">
                Next we spend the day talking about deceiving people with
                technology.
              </p>
            </a>
          </div>
          {/* col3 = April 6 ----------------------- */}
          <div className="mt-3 min-w-72">
            <a>
              <div className="mt-3 font-semibold text-3xl tracking-tight text-blue-900 bg-inherit">
                April 6
              </div>
              <p className="mt-3 h-auto font-semibold text-lg tracking-tight text-blue-800 ">
                We close out the event previewing new techniques that are still
                in development.
              </p>
            </a>
          </div>
        </div>

        {/* Table = Three columns ------------------------ */}
        <div className="grid grid-rows-1 gap-8 justify-center lg:grid-cols-3">
          {/* Col1 ----------------------- */}
          <div className="flex flex-col mt-3 justify-center min-w-72 text-blue-600 bg-gray-300">
            {/* C11--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Steven McHail
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Not so one-time payments
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                9:00AM - 10:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C12--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Jaquelin Isch
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                The finer print
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                10:00AM - 11:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C13--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Dianne Guilianelli
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Post-purchase blackmail
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                11:00AM - 12:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C14--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Lunch
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit"></div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                12:00PM - 1:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C15--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Ronni Cantadore
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Buy or die
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                1:00PM - 2:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C16--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Erhart Cockrin
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                In-person cancellation
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                2:00PM - 3:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C17--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Parker Johnson
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                The pay/cancel switcheroo
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                3:00PM - 4:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
          </div>
          {/* Col2 ----------------------- */}
          <div className="flex flex-col mt-3 justify-center min-w-72 text-blue-600 bg-gray-300">
            {/* C21--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Damaris Kimura
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                The invisible card reader
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                9:00AM - 10:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C22--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Ibrahim Frasch
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Stealing fingerprints
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                10:00AM - 11:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C23--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Cathlene Burrage
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Voting machines
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                11:00AM - 12:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C24--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Lunch
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit"></div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                12:00PM - 1:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C25--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Rinaldo Beynon
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Blackhat SEO that works
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                1:00PM - 2:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C26--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Waylon Hyden
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Turning your audience into a botnet
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                2:00PM - 3:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C27--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Giordano Sagucio
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Fly phishing
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                3:00PM - 4:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
          </div>
          {/* Col3 ----------------------- */}
          <div className="flex flex-col mt-3 justify-center min-w-72 text-blue-600 bg-gray-300">
            {/* C31--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Andrew Greene
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Neuralink dark patterns
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                9:00AM - 10:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C32--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Heather Terry
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                DALL-E for passports
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                10:00AM - 11:00AM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C33--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Piers Wilkins
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Quantum password cracking
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                11:00AM - 12:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C34--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Lunch
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit"></div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                12:00PM - 1:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C35--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Gordon Sanderson
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                SkyNet is coming
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                1:00PM - 2:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C36--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Kimberly Parsons
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Dark patterns for the metaverse
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                2:00PM - 3:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
            {/* C37--------- */}
            <div>
              <div className="flex mt-14 items-center justify-center font-semibold text-2xl tracking-tight text-blue-900">
                Richard Astley
              </div>
              <div className="flex mt-3 justify-center font-semibold text-lg tracking-tight text-blue-900 bg-inherit">
                Knowing the game and playing it
              </div>
              <div className="flex mt-3 justify-center font-mono text-md text-slate-500">
                3:00PM - 4:00PM PST
              </div>
              <div className="flex mt-10 justify-center mx-20 border-slate-100 border-b-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-32"></div>

      <div className="hidden">
        <div className="h-full w-full p-8 text-black text-left text-4xl bg-transparent ">
          <div className="h-screen w-full p-8 border-4 border-gray-800 rounded-sm text-black text-left text-4xl bg-transparent">
            Current sponsorships for our workshops and speakers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home02;
