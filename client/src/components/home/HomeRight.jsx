import Login from "./Login";
import Signup from "./SIgnup";
import { useState } from "react";

const HomeRight = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className=" col-span-5 w-full px-4 py-12  sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">
          Your one stop application for a quick, easy to use and accurate
          diagnosis. Sign up to get started.
        </p>
      </div>

      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default HomeRight;
