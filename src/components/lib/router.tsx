import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./route";
import WelcomeScreen from "../WelcomeScreen";
import AddDoctorWithYup from "../AddDoctor/AddDoctorWithYup";

export const router = createBrowserRouter([
  {
    path: RoutePath.indexRoute,
    element: <WelcomeScreen />,
  },
  {
    path: RoutePath.addDoctor,
    element: <AddDoctorWithYup />,
  },
]);
