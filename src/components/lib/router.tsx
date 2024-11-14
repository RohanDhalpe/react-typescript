import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./route";
import WelcomeScreen from "../WelcomeScreen";
import AddDoctor from "../AddDoctor/AddDoctorWithYup";
import DoctorList from "../DoctorsList";
import Login from "../login";

export const router = createBrowserRouter([
  {
    path: RoutePath.indexRoute,
    element: <WelcomeScreen />,
  },
  {
    path: RoutePath.AddDoctor,
    element: <AddDoctor />,
  },
  {
    path: RoutePath.DoctorList,
    element: <DoctorList />,
  },
  {
    path: RoutePath.LoginRoute,
    element: <Login />,
  },
]);
