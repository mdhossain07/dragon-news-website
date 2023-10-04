import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signIn(email, password)
      .then(() => {
        toast.success("Login Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-base-200">
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-[550px] h-[500px] shadow-2xl bg-base-100">
            <div className="text-center">
              <h1 className="text-3xl font-bold pt-10">Login your account</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input bg-[#F3F3F3] text-xs"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input bg-[#F3F3F3] text-xs"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>

              <p className="font-medium text-sm text-center mt-10">
                Do not have an account?
                <span>
                  <Link className="text-red-500" to="/register">
                    Register
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
