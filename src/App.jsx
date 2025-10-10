import { lazy, Suspense, useState,createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import "./App.css";
import FallBack from "./components/FallBack/FallBack.jsx";

// import Task from "./components/Task.jsx";
// import Profile from "./components/portfolio/Portfolio.jsx";
// import AboutUs from "./pages/AboutUs/AboutUs.jsx";
// import Enquery from "./pages/Enquiry/Enquiry.jsx";
// import EnqueryUncontrolled from "./pages/Enquiry/EnqueryUncontrolled.jsx";
// import EnqueryOptimization from "./pages/Enquiry/EnquiryOptimization.jsx";
// import FetchDetails from "./pages/Task/RestFetch.jsx";
// import FormDataValidation from "./pages/Task/FormValidation.jsx";
// import DynamicData from "./pages/Task/DynamicDataUpdate.jsx";
// import DropDown from "./pages/Task/DropDownValidation.jsx";
// import Home from "./pages/Home/Home.jsx";
// import FetchCard from "./pages/Task/FetchCard.jsx";
// import ContactUs from "./pages/ContactUs/ContactUs.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import BlogCard from "./components/Blog/BlogCard.jsx";
import Layout from "./components/Layout/Layout.jsx";
// import ArticleDetails from "./pages/ArticleDetails/ArticleDetails.jsx";
// import Login from "./pages/Login/Login.jsx";
// import DashBord from "./pages/DashBord/Dashbord.jsx";

const Home = lazy(() => import("./pages/Home/Home"));
const Enquery = lazy(() => import("./pages/Enquiry/Enquiry"));
const EnqueryUncontrolled = lazy(() => import("./pages/Enquiry/EnqueryUncontrolled"));
const EnqueryOptimization = lazy(() => import("./pages/Enquiry/EnquiryOptimization"));
const FetchDetails = lazy(() => import("./pages/Task/RestFetch"));
const FormDataValidation = lazy(() => import("./pages/Task/FormValidation"));
const DynamicData = lazy(() => import("./pages/Task/DynamicDataUpdate"));
const DropDown = lazy(() => import("./pages/Task/DropDownValidation"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const FetchCard = lazy(() => import("./pages/Task/FetchCard"));
const BlogCard = lazy(() => import("./components/Blog/BlogCard"));
const Profile = lazy(() => import("./components/portfolio/Portfolio"));
const ArticleDetails = lazy(() => import( "./pages/ArticleDetails/ArticleDetails"));
const Login = lazy(() => import("./pages/Login/Login"));
const DashBord = lazy(() => import("./pages/DashBord/Dashbord")); 
const Task =lazy(()=>import("./components/Task"));
const ViewData =lazy(()=>import("./pages/Task/TabelView"));
import {Provider} from 'react-redux';
import store from './redux/store.js';

export const Appctx = createContext();

export const routes =[
 {
        path: "/",
        element: <Home />,
        name : "Home"
      },
      {
        path: "enquery",
        element: <Enquery />,
        name : "Enquery"
      },
      {
        path: "articles",
        element: <FetchCard />,
        name:"Articles"
      },
      {
        path: "country",
        element: <DropDown />,
        name:"Country"
      },
      {
        path: "about-us",
        element: <AboutUs />,
        name : "About Us"
      },
      {
        path: "contact-us",
        element: <ContactUs />,
        name : "Contact Us"
      },
      {
        path: "blog",
        element: <BlogCard />,
        name :"Blog"
      },
      {
        path: "portfolio",
        element: <Profile />,
        name : "Profilo"
      },
      {
         path: "/articles/:articleId",
        element: <ArticleDetails />,
        name :"Article Details"
       
      },
      {
        path : "/login",
        element : <Login />,
        name : "Login"
      },
      {
        path : "/dashboard",
        element : <DashBord />,
        name : "Dashboard"
      },
      {
        path : "/tables",
        element : <FetchDetails />,
        name : "TabelView"
      }

]
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes
  },
]);

function App() {
  const[state,setState] = useState({
    articleList : [],
    isLoggedIn : false,
    userdetails : {
      name : "Anji",
      email : "allu@gmail.com",
      role : "admin"
    }
  });
  return (
    <div>
      {/* <Appctx.Provider value={{state,setState}} > */}
      <Provider store={store}>
      <Suspense fallback={<FallBack />}>
      <RouterProvider router={router} />
      </Suspense>
      {/* </Appctx.Provider> */}
      </Provider>
    </div>
  );
}
export default App;