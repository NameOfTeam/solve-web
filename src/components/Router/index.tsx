import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";
import ProblemList from "../../pages/ProblemList";
import Problem from "../../pages/Problem";
import Verify from "../../pages/Verify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<ProblemList />} />
        </Route>
        <Route path="/verify" element={<Verify />}/>
        <Route path="/problems/:problemId" element={<Problem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
