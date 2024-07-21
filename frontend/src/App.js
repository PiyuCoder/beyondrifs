import logo from "./logo.svg";
import "./App.css";
import StarryBackground from "./components/StarryBackground";
import HeroSection from "./components/landingpage/HeroSection";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/courses/Courses";
import Piano from "./pages/courses/Piano";
import CourseLayout from "./layout/CourseLayout";
import Vocals from "./pages/courses/Vocals";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/auth/Login";
import Otp from "./pages/auth/Otp";
import UserDashboard from "./pages/UserDashboard";
import AboutUs from "./pages/about/AboutUs";
import Collaborate from "./pages/about/Collaborate";
import IndividualBlog from "./pages/about/IndividualBlog";
import Corporate from "./pages/program/Corporate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="login-auth" element={<Otp />} />
      <Route path="user-dashboard" element={<UserDashboard />} />
      <Route path="about/aboutUs" element={<AboutUs />} />
      <Route path="about/collaborations" element={<Collaborate />} />
      <Route path="about/individualblog" element={<IndividualBlog />} />
      <Route element={<CourseLayout />}>
        <Route path="/courses/instruments/:courseName" element={<Courses />} />
        <Route path="/courses/vocals" element={<Vocals />} />
      </Route>
      <Route path="/programs/corporate/:programType" element={<Corporate />} />
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
