import { Outlet } from "react-router-dom";
import { Container } from "./style";

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
