import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import NotFound from "./pages/NotFound";
import NavBar from "./pages/NavBar";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import { AuthStatus } from "./component/AuthStatus";
import { PrivateRoute } from "./component/PrivateRoute";
import "./app.css";

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
            path="/characters/:name"
            element={
              <PrivateRoute>
                <Character />
              </PrivateRoute>
            }
          />
          <Route
            path="/locations/:name"
            element={
              <PrivateRoute>
                <Location />
              </PrivateRoute>
            }
          />
          <Route
            path="/episodes/:name"
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
