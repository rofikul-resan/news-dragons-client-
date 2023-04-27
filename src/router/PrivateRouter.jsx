import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading ............</p>;
  } else {
    if (user) {
      return children;
    }
  }
};

export default PrivateRouter;
