import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postMethod } from "../utils/methods";
import BeatLoader from "react-spinners/BeatLoader";
import { LoginContext } from "../contextApi/LoginState";

export const Signup = () => {
  
  const loginContext = useContext(LoginContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
    // Here you can implement your signup logic, like sending the data to your backend for user registration
    if(password !== confirmPassword){
      toast.warn("Confirm Password Doesn't Match")
      return;
    }
    setIsLoaded(true)
    const body = {name, email, address, gender, phone, password}
    const response = await postMethod('/auth/register',body);
    console.log("Respones = ",response);
    if(response.status === 200){
        // Show successfully message
        toast.success("Registration Successfully");
        loginContext.setCookie("ICM_AUTH_TOKEN",response.token);
        loginContext.setRelodeUser(prev=>!prev);
        navigate('/')
    }else if(response.status === 201){
        // User already loged In
        toast.warn("User Already Exist");
    }else{
        // Register error
        toast.error("Sign Up Error");
    }
    setIsLoaded(false)
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded shadow-sm flex flex-col gap-3">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <label htmlFor="gender" className="sr-only">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                autoComplete="gender"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="mobile-number" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobile-number"
                name="mobile-number"
                type="number"
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
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>

          <div>
            {!isLoaded?(
              <button
              type="submit"
              className="h-[40px] w-full flex justify-center items-center text-[20px] rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
            >
              sign up
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
            Already have an account?{" "}
            <span
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            //   onClick={() => history.push("/login")}
            >
              <Link to={'/login'}>Sign in</Link>            
              </span>
          </p>
        </div>
      </div>
    </div>
  );
};
