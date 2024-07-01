import AuthLayout from "./Components/containers/pages/AuthLayout";
import SignUp from "./Components/containers/auth/SignUp";
import Login from "./Components/containers/auth/Login";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import MainLayout from "./Components/containers/pages/MainLayout";
import TasksBox from "./Components/containers/dashboard/boxes/tasksBox/TasksBox";
import Profile from "./Components/containers/dashboard/boxes/profile/Profile";
import { ModalProvider } from "./context/ModalProvider";
import LandingPage from "./Components/containers/pages/LandingPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Index Main Route / Landing Page */}
        <Route index element={<LandingPage />} />

        {/* Nested Routes to authencation - Login,  SignUp */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<TasksBox />} />
          <Route path="task" element={<TasksBox />}>
            <Route path=":category" element={<TasksBox />} />
          </Route>
          <Route
            path="profile"
            element={
              <ModalProvider>
                <Profile />
              </ModalProvider>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <main>
              <H1 color={"red"}>Not Found</H1>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default Root;
