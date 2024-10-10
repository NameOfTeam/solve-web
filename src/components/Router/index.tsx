import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../layouts/RootLayout";
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
