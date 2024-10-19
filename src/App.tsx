import "./App.css";
import AddDoctor from "./components/AddDoctor";
import DoctorsRQ from "./components/DoctorsRQ";
// import PostTraditional from "./components/DoctorsTraditional";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      {/* <PostTraditional /> */}
      <DoctorsRQ />
      <AddDoctor />
    </QueryClientProvider>
  );
}

export default App;
