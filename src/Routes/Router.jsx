import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import ErrorPage from "@/Pages/Common/ErrorPage";

// সরাসরি ইমপোর্ট এর বদলে lazy ইমপোর্ট ব্যবহার করুন
const Home = lazy(() => import("@/Pages/Home/Home"));
const Services = lazy(() => import("@/Pages/Services/Services"));
const Portfolio = lazy(() => import("@/Pages/Portfolio/Portfolio"));
const About = lazy(() => import("@/Pages/About/About"));
const Contact = lazy(() => import("@/Pages/Contact/Contact"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;