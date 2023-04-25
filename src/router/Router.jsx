import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import CategoryNews from "../page/Home/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
