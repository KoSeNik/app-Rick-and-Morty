import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut(() => {
      navigate("/");
    });
  };

  if (auth.user === null) {
    return (
      <div className="authStatus">
        Привет! Некоторые страницы сайта доступны только после авторизации.
      </div>
    );
  }
  return (
    <div className="authStatus">
      Добро пожаловать {auth.user}
      <button className="button" onClick={handleSignOut}>
        Выйти
      </button>
    </div>
  );
};
