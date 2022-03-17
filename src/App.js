import AuthLayout from "./Components/containers/pages/AuthLayout";
import SignUp from "./Components/containers/auth/SignUp";
import Login from "./Components/containers/auth/Login";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import GlobalStyles from "./Components/GlobalStyles";
import MainLayout from "./Components/containers/pages/MainLayout";
import useDarkMode from "./Components/hooks/useDarkMode";
import TasksBox from "./Components/containers/dashboard/boxes/tasksBox/TasksBox";

const App = () => {
  const [mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<TasksBox />} />
              <Route path="task" element={<TasksBox />}>
                <Route path=":category" element={<TasksBox />} />
              </Route>
              <Route path="profile" element={<main>Hello</main>} />
            </Route>

            <Route
              path="*"
              element={
                <main>
                  <H1 color={"purple"}>Not Found</H1>
                </main>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
