import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <header className="fixed z-10 w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 md:py-4 border-b border-b-[#e6ebf4]">
        <Link
          to="/"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Test Navbar
        </Link>
      </header>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-Gray-100 relative overflow-hidden">
        <div className="absolute right-0 top-9 md:top-2 max-w-screen ">
          <svg
            className="md:w-[133px] md:h-[500px]"
            width="33"
            height="117"
            viewBox="0 0 33 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3045 70.9206C24.1349 86.0908 30.8336 105.717 33 117V0C26.7558 0.22123 13.1561 7.58784 5.78469 20.0057C-4.34628 37.0721 -0.326584 57.1684 11.3045 70.9206Z"
              fill="#2F5FAC"
            />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 max-w-screen md:left-[-2rem] ">
          <svg
            className="md:w-[100px] md:h-[400px]"
            width="29"
            height="108"
            viewBox="0 0 29 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5414 56.8344C28.5414 25.3123 9.1873 5.91866 -0.489746 0.162109V107.552C9.1873 103.78 28.5414 88.3565 28.5414 56.8344Z"
              fill="#FBAA1C"
            />
          </svg>
        </div>
        <div className="absolute top-[370px] right-[6rem] md:top-[470px] md:right-10">
          <svg
            className="md:w-[50px] md:h-auto stroke-[3px] md:stroke-[0.5px]"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00977 4.5C9.00977 6.0121 7.59533 7.5 5.50977 7.5C3.4242 7.5 2.00977 6.0121 2.00977 4.5C2.00977 2.9879 3.4242 1.5 5.50977 1.5C7.59533 1.5 9.00977 2.9879 9.00977 4.5Z"
              stroke="#F47E20"
            />
          </svg>
        </div>
        <div className="absolute left-[-40px] top-[20px] md:left-[4rem] md:top-[8rem] ">
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="36.7032"
              cy="36.7032"
              r="36.5"
              transform="rotate(-75 36.7032 36.7032)"
              fill="#C6D6EF"
            />
          </svg>
        </div>
        <div className="absolute top-0 md:top-[15rem] md:left-[10rem]">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.843 1.99998L8.83754 20.6805"
              stroke="#2FAC61"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M1.99986 8.83751L20.6804 13.8429"
              stroke="#2FAC61"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-7 w-[22rem] md:pt-20 md:w-[30rem] md:gap-8 text-black">
            <h1 className="text-[#22269E] text-3xl font-medium pb-2  md:text-4xl">
              Welcome back!
            </h1>
            <div className="container md:font-medium">
              <label htmlFor="email">Email</label>
              <p>
                <input
                  type="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300  block w-full p-3 "
                  required
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </p>
            </div>

            <div className="container pb-2 md:font-medium text-black">
              <label htmlFor="password">Password</label>
              <p>
                {" "}
                <input
                  type="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300  block w-full p-3"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                />
              </p>
            </div>

            <button
              type="submit"
              className="text-white bg-Blue-500 font-medium rounded-xl text-sm w-full sm:w-auto px-4 py-4 text-center hover:bg-Blue-400  transition duration-250 ease-in-out"
            >
              Log in
            </button>
            <p className="pt-6 text-black">
              Don't have an account?{" "}
              <Link
                to="/register"
                target="_blank"
                className="font-semibold text-Blue-500 pl-3 hover:text-orange-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
