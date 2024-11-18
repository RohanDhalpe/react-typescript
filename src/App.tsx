import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Approuter from "./modules/doctor/components/router/Approuter";

function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <Approuter />
    </QueryClientProvider>
  );
}

export default App;
