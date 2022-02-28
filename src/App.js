// import AuthLayout from "./Components/containers/pages/AuthLayout";
// import SignUp from "./Components/containers/auth/SignUp";
// import Login from "./Components/containers/auth/Login";
// import TaskView from "./Components/containers/dashboard/mainView/TaskView";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import Categorie from "./Components/containers/dashboard/mainView/Categorie";

const App = () => {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<AuthLayout />}>
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
      </Routes> */}
      <Routes>
        <Route path="view" element={<DashboardLayout />}>
          <Route
            index
            element={
              <main
                style={{
                  // height: "-webkit-fill-available",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 1 auto",
                }}
              >
                <H1 color={"Purple"}>Select a categorie</H1>
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
      </Routes>
    </div>
  );
};

export default App;
