import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";
import { MobileHome } from "./MobileHome";
import { useAppContext } from "../context/AppContext"

const Home = () => {
  const { errorMessage, clearMessage } = useAppContext()
  return (
    <div>
      <section className="hidden relative lg:grid grid-cols-9 flex-wrap h-screen lg:items-center">
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
        <HomeLeft />
        <HomeRight />
      </section>
      <section className="lg:hidden h-screen lg:items-center">
        <MobileHome />
      </section>
    </div>
  );
};

export default Home;
