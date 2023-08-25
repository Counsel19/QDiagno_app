import ChatMsg from "../components/chatPanel/ChatMsg";
import ChatMsgUser from "../components/chatPanel/ChatMsgUser";
import Input from "../components/chatPanel/Input";
import Sidebar from "../components/sidebar/Sidebar";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import MobileNav from "../components/sidebar/MobileNav";

const ChatWindow = () => {
  const { chatRepo, user, logout } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleIconHoverOpen = () => {
    setIsOpen(true);
  };
  const handleIconHoverClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div className="flex h-screen w-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          <div className="flex flex-col flex-1 h-full">
            <div className="flex flex-end py-3 mx-2 lg:mx-6 items-center justify-between">
              <button
                onMouseEnter={handleIconHoverOpen}
                onMouseLeave={handleIconHoverClose}
                className="cursor-pointer p-3 rounded-md bg-gray-50 text-green-500 lg:hidden"
              >
                <BsFillInfoCircleFill />
              </button>
              <h3 className="font-semibold text-sm">
                Quick Diagnosis Assistant
              </h3>
              <div className="flex gap-4">
                <span className="p-3 rounded-md text-xs font-semibold bg-gray-50 text-indigo-500 capitalize">
                  {user.fullname}
                </span>
                <button
                  onClick={logout}
                  className="cursor-pointer p-3 rounded-md bg-gray-50 text-rose-500 hidden lg:block"
                >
                  <AiOutlinePoweroff />
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1 flex-shrink-0 rounded-2xl bg-gray-100 h-5/6 p-2 lg:p-4 lg:mx-6">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-13 gap-y-2">
                    {chatRepo.map((item, index) =>
                      item.createdBy === "model" ? (
                        <ChatMsg key={index} msg={item.msg} />
                      ) : (
                        <ChatMsgUser key={index} msg={item.msg} />
                      )
                    )}
                  </div>
                </div>
              </div>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ChatWindow;
