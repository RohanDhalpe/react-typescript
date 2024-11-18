import { Outlet } from "react-router-dom";
import DoctorDashboard from "./component";

function DoctorDashboardLayout() {
  return (
    <>
      <DoctorDashboard />
      <Outlet />
    </>
  );
}

export default DoctorDashboardLayout;
