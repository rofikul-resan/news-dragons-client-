import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import CategoryNews from "../page/Home/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch(`http://127.0.0.1:5000/news-category/0`),
      },
      {
        path: "/news-category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/news-category/${params.id}`),
      },
    ],
  },
]);

export default router;
