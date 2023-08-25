import { useState } from "react";
import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";
import { useAppContext } from "../context/AppContext";

export const MobileHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const { errorMessage, clearMessage } = useAppContext();

  const navBtnCtr = (prev, next) => {
    setPreviousIndex(prev);
    setCurrentIndex(next);
  };
  return (
    <div className="py-4">
      {errorMessage ? (
        <div
          className="bg-red-100 border z-50 border-red-400 text-red-700 px-4 py-2 rounded flex items-center justify-between gap-4 mb-6 fixed top-[2rem] right-[1.5rem] lg:top-[6rem] lg:right-[3rem]"
          role="alert"
        >
          <strong className="font-bold">{errorMessage}!</strong>

          <span className="px-4 py-2" onClick={clearMessage}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : null}
      <div class="overflow-hidden pb-8 bg-white">
        <div class="overflow-hidden cursor-grab">
          <div
            className={`transition duration-300 transform ease ${
              currentIndex === 0
                ? "translate-x-none opacity-1"
                : "translate-x-1/4 opacity-0 hidden"
            }`}
          >
            <HomeLeft />

            <button
              type="button"
              className="flex items-center mx-auto justify-center rounded-lg w-5/6 border border-indigo-500  hover:text-white hover:bg-indigo-600 disabled:bg-indigo-300 px-6 py-2 font-semibold"
              onClick={() => navBtnCtr(0, 1)}
            >
              Login
            </button>
          </div>
          <div
            className={`transition duration-300 transform ease ${
              currentIndex === 1
                ? "translate-x-none opacity-1"
                : "translate-x-1/4 opacity-0 hidden"
            }`}
          >
            <HomeRight />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          onClick={() => navBtnCtr(1, 0)}
          class={`w-2 h-2 rounded-full mx-1 ${
            currentIndex === 0 ? "bg-indigo-500" : "bg-gray-200"
          }`}
        ></button>
        <button
          onClick={() => navBtnCtr(0, 1)}
          class={`w-2 h-2 rounded-full mx-1 ${
            currentIndex === 1 ? "bg-indigo-500" : "bg-gray-200"
          }`}
        ></button>
      </div>
    </div>
  );
};
