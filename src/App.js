import AuthLayout from "./Components/containers/pages/AuthLayout";
import SignUp from "./Components/containers/auth/SignUp";
import Login from "./Components/containers/auth/Login";
import H1 from "./Components/presentational/typography/H1";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/containers/pages/DashboardLayout";
import TaskView from "./Components/containers/dashboard/mainView/TaskView";
import Categorie from "./Components/containers/dashboard/mainView/Categorie";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="view" element={<TaskView />}>
            <Route
              index
              element={
                <main>
                  <H1 color={"Purple"}>Select a categorie</H1>
                </main>
              }
            />
            <Route path=":categorie" element={<Categorie />} />
          </Route>
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
