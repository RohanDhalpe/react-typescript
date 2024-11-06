import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./route";
import WelcomeScreen from "../WelcomeScreen";
import AddDoctor from "../AddDoctor/AddDoctorWithYup";
import DoctorList from "../DoctorDetails";

export const router = createBrowserRouter([
  {
    path: RoutePath.indexRoute,
    element: <WelcomeScreen />,
  },
  {
    path: RoutePath.addDoctor,
    element: <AddDoctor />,
  },
  {
    path: RoutePath.DoctorList,
    element: <DoctorList />,
  },
]);
