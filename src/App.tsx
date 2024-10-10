import { Theme, ThemeProvider } from "@emotion/react";
import Router from "./components/Router";

const theme: Theme = {
  colors: {
    primary: "#9a55f3",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
