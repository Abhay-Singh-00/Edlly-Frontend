import { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const[user, setUser]= useState(
    {
      fullName:"",
      userName:"",
      email:"",
      password:"",
      phoneNumber:"",
      role:"",    
    }
  );
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
    setUser({...user, [e.target.name]:e.target.value});
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post("http://localhost:8081/api/users/register", user);
      console.log(response.data);
      toast.success('Registration successful!');
      navigate("/");
    } 
    catch (error: any) {
      if(error.response && error.response.data && error.response.data.message){
        toast.error(error.response.data.message);
      }
      else if(error.message){
        toast.error(error.message);
      }
      else
      toast.error('Registration failed. Please try again.');
    }
    finally{
    console.log(user);
    setTimeout(() => {
      setloading(false);
    }, 3000);
    }
  };

  return (
    <div className="pt-16 flex justify-center min-h-screen">
      <div className=" w-full md:w-[550px] p-3">
        <div className="border-t-10 border-t-blue-500 dark:bg-gray-800 h-full rounded-lg p-5 shadow-lg">
          <h1 className="font-bold text-3xl mb-5 dark:text-white">
            Register Here...
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name here"
                required 
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your user name here"
                required 
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here"
                required 
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your password here"
                required 
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Phone Number here"
                required 
                onChange={handleChange}
              />
            </div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <select
              name="role"
              defaultValue={""}
              onChange={handleChange}
              required
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>Select Role</option>
              <option value="Tutor">Tutor</option>
              <option value="Learner">Learner</option>
            </select>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required 
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="dark:text-white mb-5 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Login here
              </a>
            </div>
            <div className="flex justify-center">
              <button
                disabled={loading}
                type="submit"
                className={`flex items-center justify-center font-medium text-sm transition-all duration-300 ${
                  loading
                    ? "w-12 h-12 rounded-full bg-blue-600 p-0"
                    : "w-72 h-12 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br px-5"
                }`}
              >
                {loading ? (
                  <span className="h-6 w-6 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
