// import AuthLayout from './Components/containers/pages/AuthLayout'
// import SignUp from './Components/containers/auth/SignUp'
// import Login from './Components/containers/auth/Login'
// import { Routes, Route } from 'react-router-dom'
import DashboardLayout from "./Components/containers/pages/DashboardLayout";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={ <AuthLayout /> } >
          <Route index element={ <Login /> } />
          <Route path="signup" element={ <SignUp /> } />
        </Route>
      </Routes> */}
      <DashboardLayout />
    </div>
  );
}

export default App;
