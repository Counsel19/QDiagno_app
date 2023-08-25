import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import dev1 from "../../assets/images/sinach.jpg";
import dev2 from "../../assets/images/counsel.jpg";
import { useAppContext } from "../../context/AppContext";

const MobileNav = ({ setIsOpen, isOpen }) => {
  const { logout } = useAppContext();
  const handleIconHoverOpen = () => {
    setIsOpen(true);
  };
  const handleIconHoverClose = () => {
    setIsOpen(false);
  };

  const handleMobileLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <div
      onMouseEnter={handleIconHoverOpen}
      onMouseLeave={handleIconHoverClose}
      className="relative"
    >
      {isOpen && (
        <div className="h-screen w-screen z-50 bg-gray-700 bg-opacity-70 fixed top-0 right-0 left-0 bottom-0">
          <div
            onMouseEnter={handleIconHoverOpen}
            onMouseLeave={handleIconHoverClose}
            className="px-6 py-8 w-full h-42 bg-white rounded shadow-lg"
          >
            <span className="absolute top-4 right-4 rounded border p-2 bg-white border-blue-900">
              <IoCloseSharp
                className="justify-end cursor-pointer text-rose-600"
                size={30}
                onClick={handleIconHoverClose}
              />
            </span>
            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 w-full py-6 px-4 rounded-lg">
              <Brand />
            </div>

            <div className="flex flex-col mt-8">
              <div className="mb-6">
                <h4 className="mb-2 font-bold">About App</h4>
                <p className="text-base text-gray-500 ">
                  <span className="text-indigo-500 font-semibold">QDiagno</span>{" "}
                  is a chatbot that offers patients a handly tool for quick and
                  reliable diagnosis using the expressed symptoms.
                </p>
                <p className="text-base text-gray-500 mt-1">
                  <span className="font-semibold">How to Use: </span>
                  Users are to state in details all the symptoms that have been
                  noticed in one sentence
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold">Devlopers</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <img
                      src={dev1}
                      alt="Dev"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold">Osinachi</span>
                      <span className="text-xs font-thin text-500">
                        Software Developer - Computer Sc., FUTO{" "}
                      </span>
                      <div className="flex items-center gap-2">
                        <Link to="/">
                          <AiFillGithub />
                        </Link>
                        <Link to="/">
                          <AiFillLinkedin />
                        </Link>
                        <Link to="/">
                          <AiFillTwitterCircle />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={dev2}
                      alt="Dev"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold">Counsel</span>
                      <span className="text-xs font-thin text-500">
                        Software Developer - Computer Sc., FUTO{" "}
                      </span>
                      <div className="flex items-center gap-2">
                        <Link to="/">
                          <AiFillGithub />
                        </Link>
                        <Link to="/">
                          <AiFillLinkedin />
                        </Link>
                        <Link to="/">
                          <AiFillTwitterCircle />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleMobileLogout}
                className="p-2 flex item-center justify-center text-sm mt-6 rounded bg-rose-100 text-rose-600 flex justify-start w-full p-2 hover:text-gray-400  hover:bg-blue-50"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
