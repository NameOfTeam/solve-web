import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
        <Footer />
      </Main>
    </Container>
  );
};

export default RootLayout;
