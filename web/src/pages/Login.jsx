import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../api/auth";
import jwtDecode from "jwt-decode";
import * as helper from "../utils/helper";
import { setLogin } from "../redux/slices/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = {
    username: "invalid password or username",
    password: "invalid password or username",
  };
  const [errorMessages, setErrorMessages] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const session = await login({ username, password });
    if (session?.status === 200) {
      helper.sessionSave("access_token", session?.data.token);
      const userDataFromToken = jwtDecode(session?.data.token);
      dispatch(setLogin(userDataFromToken));
      navigate("/home");
    } else {
      setErrorMessages({ name: "password", message: errors.password });
      navigate("/");
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="text-red-600">{errorMessages.message}</div>
    );
  return (
    <div className="flex justify-center items-center min-w-full h-screen bg-slate-200">
      <div className="h-2/4 w-2/3 sm:w-1/3 sm:h-1/4 flex justify-center items-center shadow-lg shadow-slate-500 rounded-xl border-2">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between items-center sm:flex-row">
            <label>Username </label>
            <input
              className="w-40 sm:ml-2"
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          {renderErrorMessage("username")}
          <div className="mt-2 mb-4 flex flex-col justify-between items-center sm:flex-row">
            <label>Password </label>
            <input
              className="w-40 sm:ml-2"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            {renderErrorMessage("password")}
          </div>
          <div className="font-semibold rounded-lg border-2 border-slate-400 text-slate-400 hover:text-white hover:bg-black ">
            <input type="submit" />
          </div>
          <div className="font-semibold mt-3 rounded-lg border-2 border-slate-400 text-slate-400 hover:text-white hover:bg-black ">
            <input
              type="button"
              onClick={() => {
                navigate("/register");
              }}
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
