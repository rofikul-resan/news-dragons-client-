import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 h-screen">
        <button className="btn  loading">loading</button>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
