import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Main from "../Main";
import NotFound from "../NotFound";
import Login from "../Login";
import Signup from "../SignUp";

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
