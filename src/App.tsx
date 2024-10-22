import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/theme";
import ThemedContainer from "./components/common/ThemedContainer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemedContainer>
            <Router />
        </ThemedContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
