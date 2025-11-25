import { useState } from "react";


const Login = ()=>{
  const[loading, setloading]= useState(false);

    return(
           <div className="pt-16 flex justify-center">
      <div className=" w-full md:w-[550px] p-3">
        <div className="border-t-10 border-t-blue-500 dark:bg-gray-800 h-full rounded-lg p-5 shadow-lg">
          <h1 className="font-bold text-3xl mb-5 dark:text-white">
            Login Here...
          </h1>
          <form >
            
            {/* User Name */}
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
              />
            </div>
            
            {/* Password */}
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
              required
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled>Select Role</option>
              <option value="Tutor">Tutor</option>
              <option value="Learner">Learner</option>
            </select>
           
            <div className="dark:text-white mb-5 text-sm">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Register here
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
}

export default Login;