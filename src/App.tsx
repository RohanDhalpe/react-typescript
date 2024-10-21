import "./App.css";
import AddDoctorWithYup from "./components/AddDoctorWithYup";
// import AddDoctorWithoutYup from "./components/AddDoctorWithoutYup";
import DoctorsRQ from "./components/DoctorsRQ";
// import PostTraditional from "./components/DoctorsTraditional";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      {/* <PostTraditional /> */}
      <DoctorsRQ />
      {/* <AddDoctorWithoutYup /> */}
      <AddDoctorWithYup />
    </QueryClientProvider>
  );
}

export default App;
