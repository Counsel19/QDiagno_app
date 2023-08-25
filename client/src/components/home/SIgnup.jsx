import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Signup = ({ setIsLogin }) => {
  const { register, isLoading } = useAppContext();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSignup = async () => {
    const res = await register(input);
    if (res) {
      navigate("/chat");
    }
  };
  return (
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">
          Fullname
        </label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-400 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Fullname"
            name="fullname"
            value={input.fullname}
            onChange={handleInputChange}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <BsPersonCircle className="h-4 w-4 text-gray-400" />
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-400 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-400 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Already have an Account?{" "}
          <button className="underline" onClick={() => setIsLogin(true)}>
            Login
          </button>
        </p>

        <button
          type="button"
          disabled={isLoading}
          className="flex items-center rounded-lg  bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 px-6 py-3  font-semibold text-white"
          onClick={handleSignup}
        >
          Sign Up
          {isLoading ? <TailSpin width={20} height={20} /> : null}
        </button>
      </div>
    </form>
  );
};

export default Signup;
