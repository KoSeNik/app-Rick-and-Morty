import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { AuthStatus } from "./component/AuthStatus";
import { PrivateRoute } from "./component/PrivateRoute";
import "./App.css";

const Main = lazy(() => import("./pages/Main"));
const Categories = lazy(() => import("./pages/Categories"));
const Location = lazy(() => import("./pages/Location"));
const Episode = lazy(() => import("./pages/Episode"));
const Character = lazy(() => import("./pages/Character"));
const NavBar = lazy(() => import("./pages/NavBar"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() =>
  import("./pages/Login").then((module) => ({
    default: module.Login,
  }))
);

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <AuthStatus />
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/categories/:category"
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          />
          <Route
            path="/characters/:id"
            element={
              <PrivateRoute>
                <Character />
              </PrivateRoute>
            }
          />
          <Route
            path="/locations/:id"
            element={
              <PrivateRoute>
                <Location />
              </PrivateRoute>
            }
          />
          <Route
            path="/episodes/:id"
            element={
              <PrivateRoute>
                <Episode />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
