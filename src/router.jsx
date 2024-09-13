import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import MyPage from "./pages/MyPage/MyPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "log-in", element: <LogInPage /> },
      { path: "my-page", element: <MyPage /> },
      {
        path: "movies/:movieId",
        element: <MovieDetailPage />,
        loader: movieDetailPageLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
