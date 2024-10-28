import { Outlet } from "react-router-dom";
import { Container } from "./style";
import Header from "../../components/Header";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
