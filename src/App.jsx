import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task.jsx";
import Profile from "./components/portfolio/Portfolio.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Enquery from "./pages/Enquiry/Enquiry.jsx";
import EnqueryUncontrolled from "./pages/Enquiry/EnqueryUncontrolled.jsx";
import EnqueryOptimization from "./pages/Enquiry/EnquiryOptimization.jsx";
import FetchDetails from "./pages/Task/RestFetch.jsx";
import FormDataValidation from "./pages/Task/FormValidation.jsx";
import DynamicData from "./pages/Task/DynamicDataUpdate.jsx";
import DropDown from "./pages/Task/DropDownValidation.jsx";
import Home from "./pages/Home/Home.jsx";
import FetchCard from "./pages/Task/FetchCard.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogCard from "./components/Blog/BlogCard.jsx";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "enquery",
        element: <Enquery />,
      },
      {
        path: "cards",
        element: <FetchCard />,
      },
      {
        path: "country",
        element: <DropDown />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blog",
        element: <BlogCard />,
      },
      {
        path: "portfolio",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
