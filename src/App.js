import AuthLayout from "./Components/containers/pages/AuthLayout";
import SignUp from "./Components/containers/auth/SignUp";
import Login from "./Components/containers/auth/Login";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import Categorie from "./Components/containers/dashboard/topbar/Categorie";
import GlobalStyles from "./Components/GlobalStyles";
import MainLayout from "./Components/containers/pages/MainLayout";
import useDarkMode from "./Components/hooks/useDarkMode";

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

            <Route path="view" element={<DashboardLayout />}>
              <Route
                index
                element={
                  <main
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 1 auto",
                    }}
                  >
                    <H1 color={"Yellow"}>Select a categorie</H1>
                  </main>
                }
              />
              <Route path=":categorie" element={<Categorie />} />
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
