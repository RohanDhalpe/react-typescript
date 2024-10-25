import { createBrowserRouter } from "react-router-dom";
import { RoutePath } from "./route";
import WelcomeScreen from "../WelcomeScreen";

export const router = createBrowserRouter([
  {
    path: RoutePath.indexRoute,
    element: <WelcomeScreen />,
  },
]);
