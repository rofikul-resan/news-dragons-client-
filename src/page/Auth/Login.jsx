import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname;

  const HandelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, form);
    login(email, password)
      .then(() => {
        navigate(from);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero rounded-lg bg-white">
        <div className="card flex-shrink-0  my-12 shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-3 m-5">
            Login your account!
          </h1>
          <form onSubmit={HandelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control my-4">
              <button className="btn btn-primary w-full">Login</button>
            </div>
            <p className="text-xs text-center ">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't Have An Account ?{" "}
              <Link to={"/auth/singUp"} className="text-red-600 font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
