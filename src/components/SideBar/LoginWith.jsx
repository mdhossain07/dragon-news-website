import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <>
      <div className="">
        <h2 className="text-xl font-semibold">Login With </h2>
        <div className="mb-3 mt-3">
          <button className="btn btn-outline btn-primary w-full">
            <span>
              <FaGoogle className="text-2xl text-blue-700 mr-3" />
            </span>
            Login with Google
          </button>
        </div>

        <div className="">
          <button className="btn btn-outline w-full">
            <FaGithub className="text-2xl mr-3" />
            Login with Github
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginWith;
