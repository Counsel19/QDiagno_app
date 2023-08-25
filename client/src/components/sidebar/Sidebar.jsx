import Brand from "./Brand";
import dev1 from "../../assets/images/sinach.jpg";
import dev2 from "../../assets/images/counsel.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col py-8 pl-6 pr-3 h-full lg:w-72 bg-white flex-shrink-0">
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 w-full py-6 px-4 rounded-lg">
        <Brand />
      </div>

      <div className="flex flex-col mt-8">
        <div className="mb-6">
          <h4 className="mb-2 font-bold">About App</h4>
          <p className="text-base text-gray-500 ">
            <span className="text-indigo-500 font-semibold">QDiagno</span> is a
            chatbot that offers patients a handly tool for quick and reliable
            diagnosis using the expressed symptoms.
          </p>
          <p className="text-base text-gray-500 mt-1">
            <span className="font-semibold">How to Use:</span>
            Users are to state in details all the symptoms that have been
            noticed in one sentence
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-bold">Devlopers</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img src={dev1} alt="Dev" className="h-8 w-8 rounded-full object-cover" />
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
              <img src={dev2} alt="Dev" className="h-8 w-8 rounded-full object-cover" />
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
      </div>
    </div>
  );
};

export default Sidebar;
