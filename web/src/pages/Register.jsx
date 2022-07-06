import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/user";

function Register() {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    nickname: "",
    birthday: "",
    gender: "",
    role: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(form);
    navigator("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-400">
      <form onSubmit={handleSubmit}>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Firstname </label>
          <input
            className="w-40 "
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Lastname </label>
          <input
            className="w-40  "
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Nickname </label>
          <input
            className="w-40  "
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={(e) => {
              setForm({ ...form, nickname: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Birthday </label>
          <input
            className="w-40  "
            type="date"
            name="birthday"
            onChange={(e) => {
              setForm({ ...form, birthday: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Gender</label>
          <div>
            <input
              type="radio"
              id="Male"
              name="age"
              value="Male"
              onChange={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}
            />
            <label for="Male">Male</label>{" "}
            <input
              type="radio"
              id="Female"
              name="age"
              value="Female"
              onChange={(e) => {
                setForm({ ...form, gender: e.target.value });
              }}
            />
            <label for="Female">Female</label>
          </div>
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Role </label>
          <div>
            <input
              type="radio"
              id="student"
              name="role"
              value="Student"
              onChange={(e) => {
                setForm({ ...form, role: e.target.value });
              }}
            />
            <label for="student">Student</label>{" "}
            <input
              type="radio"
              id="instructor"
              name="role"
              value="Instructor"
              onChange={(e) => {
                setForm({ ...form, role: e.target.value });
              }}
            />
            <label for="instructor">Instructor</label>
          </div>
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Username </label>
          <input
            className="w-40  "
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
            }}
          />
        </div>
        <div className="mt-2 mb-4 grid grid-cols-2 ">
          <label className="text-left">Password </label>
          <input
            className="w-40  "
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <button className="font-semibold rounded-lg border-2 border-slate-400 text-white bg-black ">
            Submit
          </button>
          <button
            className="font-semibold rounded-lg border-2 border-slate-400  text-white bg-black "
            onClick={() => {
              navigator("/");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default Register;
