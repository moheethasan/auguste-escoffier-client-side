import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import UpdateClass from "../pages/Dashboard/MyClass/UpdateClass";
import Feedback from "../pages/Dashboard/ManageClasses/Feedback";
import Instructors from "../pages/Home/Instructors/Instructors";
import Classes from "../pages/Home/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "updateClass/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/classes/${params.id}`),
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "feedback/:id",
        element: <Feedback></Feedback>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/classes/${params.id}`),
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);

export default router;
