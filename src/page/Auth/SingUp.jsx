import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div>
      <div className="hero rounded-lg bg-white">
        <div className="card flex-shrink-0  my-12 shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-3 m-5">
            Register your account !
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="yourName"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUlr"
                placeholder="Enter Your Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your password"
                className="input input-bordered"
              />
            </div>
            <div className="flex gap-2 mt-3">
              <input type="checkbox" name="acceptTerm" />
              <label htmlFor="acceptTerm" className="text-sm font-semibold">
                Accept Term & Conditions
              </label>
            </div>
            <div className="form-control my-4">
              <button className="btn btn-success w-full">Sing Up</button>
            </div>
            <p className="text-xs text-center ">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Have An Account ?{" "}
              <Link
                to={"/auth/singUp"}
                className="text-violet-600 font-semibold"
              >
                log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
