import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import CategoryNews from "../page/Home/CategoryNews";
import Error404 from "../components/Error404";
import NewsPage from "../page/news-page/NewsPage";
import NewsCardFull from "../page/news-page/NewsCardFull";
import AuthPage from "../page/Auth/AuthPage";
import Login from "../page/Auth/Login";
import SingUp from "../page/Auth/SingUp";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <CategoryNews></CategoryNews>,
        loader: () =>
          fetch(
            " https://news-dragon-server-resan6231-gmailcom.vercel.app/news"
          ),
      },
      {
        path: "/news-category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            ` https://news-dragon-server-resan6231-gmailcom.vercel.app/news-category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: (
      <PrivateRouter>
        <NewsPage></NewsPage>
      </PrivateRouter>
    ),
    children: [
      {
        path: ":id",
        element: <NewsCardFull></NewsCardFull>,
        loader: ({ params }) =>
          fetch(
            ` https://news-dragon-server-resan6231-gmailcom.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singUp",
        element: <SingUp />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
