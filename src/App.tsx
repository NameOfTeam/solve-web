import { Theme, ThemeProvider } from "@emotion/react";
import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const theme: Theme = {
  colors: {
    primary: "#9a55f3",
  },
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
