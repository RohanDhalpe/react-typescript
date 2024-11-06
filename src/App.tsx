import Approuter from "./components/Approuter";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <Approuter />
    </QueryClientProvider>
  );
}

export default App;
