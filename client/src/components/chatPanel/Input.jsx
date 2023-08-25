import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { TailSpin } from "react-loader-spinner";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const { addChat, isLoading } = useAppContext();

  const processAddChat = () => {
    addChat(userInput, "user");
    setUserInput("");
  };

  return (
    <div className="flex flex-row gap-4 items-center h-16 rounded-md bg-white w-full px-2 lg:px-4 py-2">
      <div className="flex-grow lg:ml-4">
        <div className="relative w-full">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type Here..."
            className="flex w-full border rounded-md focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
        </div>
      </div>

      <button
        onClick={processAddChat}
        disabled={isLoading}
        className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 rounded-md text-white px-5 py-2 flex-shrink-0"
      >
        <span>{isLoading ? "Please wait..." : "Send"}</span>
        {isLoading && <TailSpin width={20} height={20} />}
        {!isLoading && (
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default Input;
