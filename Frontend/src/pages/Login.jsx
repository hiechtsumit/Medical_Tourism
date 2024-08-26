import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { postMethod } from "../utils/methods";
import BeatLoader from "react-spinners/BeatLoader";
import { LoginContext } from "../contextApi/LoginState";

export const Login = () => {
  const loginContext = useContext(LoginContext)
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  async function handelSubmit(e) {
    try {
      e.preventDefault();
      setIsLoaded(true)
      // alert("hello")
      const body = { phone, password };
      // console.log("login");
      const response = await postMethod("/auth/login", body);
      //   console.log(response);
      if (response.status === 200) {
        // login successfully
        toast.success(response.message);
        loginContext.setCookie("ICM_AUTH_TOKEN", response.token);
        // loginContext.setIsAuthenticate(true);
        loginContext.setRelodeUser((prev) => !prev);
        // loginContext.setUser(response.user);
        navigate("/");
      } else if (response.status === 401) {
        // Incorrect Password
        toast.warn(response.message);
      } else if (response.status === 404) {
        // User not registered
        toast.warn(response.message);
      } else {
        toast.error(response.message);
      }
      setIsLoaded(false)
    } catch (err) {
      toast.error("Server Error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
          <div className="rounded-md shadow-sm flex flex-col gap-3">
            <div>
              <label htmlFor="mobile-number" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mobile Number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div>
            {!isLoaded?(
              <button
              type="submit"
              className="h-[40px] w-full flex justify-center items-center text-[20px] rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
            >
              Sign in
            </button>
            ):(
              <div className="h-[40px] w-full flex justify-center items-center text-[20px] rounded-md text-white bg-indigo-700">
            <BeatLoader color="#fff" loading={true}/>
            </div>
            )}
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
          Don{"'"}t have an account?&nbsp;
            <span
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              <Link to={'/signup'}>Sign up</Link>            
              </span>
          </p>
        </div>
      </div>
    </div>
  );
};
