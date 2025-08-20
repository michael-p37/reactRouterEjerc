import { Link } from "react-router-dom";
import useForm from "../../Hooks";

type loginFormType = {
  username: string;
  password: string;
  id: number;
};
const initial = {
  username: "",
  password: "",
  id: 0,
};

function Login() {
  const { values, handleChange } = useForm<loginFormType>(initial);

  function onLogin(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
  }
  return (
    <>
      <Link to="/">Inicio</Link>
      <h2>Login page</h2>
      <form action="" onSubmit={() => onLogin}>
        <label htmlFor="">
          <input
            id="username"
            type="text"
            value={values.username}
            onChange={(e) => handleChange("username", e.target.value)}
            placeholder="Username"
          />
          Username
        </label>
        <label htmlFor="">
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Password"
          />
          Password
        </label>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
export default Login;
