import { useContext } from "react";
import AuthLayout from "./Components/containers/pages/AuthLayout";
import SignUp from "./Components/containers/auth/SignUp";
import Login from "./Components/containers/auth/Login";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import GlobalStyles from "./Components/GlobalStyles";
// import MainLayout from "./Components/containers/pages/MainLayout";
import useDarkMode from "./Components/hooks/useDarkMode";
import TasksBox from "./Components/containers/dashboard/boxes/tasksBox/TasksBox";
import Profile from "./Components/containers/dashboard/boxes/profile/Profile";
import Alert from "./Components/presentational/Alert";
import { appContext } from "./context/GlobalContext";
import { ModalProvider } from "./context/ModalProvider";
import { useFela } from "react-fela";

const App = () => {
  const { alertMessage, alertSettings, currentTheme } = useContext(appContext);
  const [mountedComponent] = useDarkMode();

  const { css, theme } = useFela();

  const rules = () => ({
    ...theme.darkModusLayout(currentTheme),
  });

  if (!mountedComponent) return <div />;

  return (
    <>
      <GlobalStyles />
      <div className={css(rules)}>
        <Alert message={alertMessage} alertSettings={alertSettings} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />}>
            {/* <Route path="/" element={<MainLayout />}> */}
            <Route element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
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
        </Routes>
      </div>
    </>
  );
};

export default App;
