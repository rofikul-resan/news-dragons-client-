import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";

const SingUp = () => {
  const [termAccept, setTermAccept] = useState(false);
  const { singUp } = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.yourName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const acceptTerm = form.acceptTerm.checked;
    console.log(userName, photoUrl, email, password, acceptTerm);

    if (acceptTerm) {
      singUp(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          form.reset();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <div className="hero rounded-lg bg-white">
        <div className="card flex-shrink-0  my-12 shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-3 m-5">
            Register your account !
          </h1>
          <form onSubmit={handleSingUp} className="card-body">
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
                name="photoUrl"
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
              <input
                onChange={(e) => setTermAccept(e.target.checked)}
                type="checkbox"
                name="acceptTerm"
              />
              <label htmlFor="acceptTerm" className="text-sm font-semibold">
                Accept Term & Conditions
              </label>
            </div>
            <div className="form-control my-4">
              <button className="btn btn-success w-full" disabled={!termAccept}>
                Sing Up
              </button>
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
