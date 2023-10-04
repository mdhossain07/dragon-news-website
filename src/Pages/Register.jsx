import { useState } from "react";
import Navbar from "../Shared/Navbar";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User created successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-200">
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-[550px] h-[620px] shadow-2xl bg-base-100">
            <div className="text-center">
              <h1 className="text-3xl font-bold mt-10">
                Register your account
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input bg-[#F3F3F3] text-xs"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo url"
                  className="input bg-[#F3F3F3] text-xs"
                  name="img"
                />
              </div>
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
                <label className="flex gap-2 mt-2 text-xs">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  Accept Term & Conditions
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  className={`btn btn-neutral ${
                    isChecked ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
