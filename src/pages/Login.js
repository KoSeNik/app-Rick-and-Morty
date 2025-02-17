import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "./TextInput";
import { useAuth } from "../context/AuthProvider";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    auth.signIn(email, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Почта"
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        label="Пароль"
        type="password"
        placeholder="Введите ваш пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button" type="submit">
        Войти
      </button>
    </form>
  );
};
