import { useAppContext } from "../../context/AppContext";

const ChatMsgUser = ({ msg }) => {
  const { user } = useAppContext();

  return (
    <div className="col-start-1 lg:col-start-6 col-end-12 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-400 flex-shrink-0 capitalize">
          {user.fullname[0]}
        </div>
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{msg}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMsgUser;
