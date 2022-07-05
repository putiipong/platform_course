import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../api/user";
import { sessionGet } from "../utils/helper";

function Profile() {
  const navigator = useNavigate();
  const profile = JSON.parse(sessionGet("profile"));
  const [form, setForm] = useState({
    id: profile?.id || "",
    firstname: profile?.firstname || "",
    lastname: profile?.lastname || "",
    nickname: profile?.nickname || "",
    birthday: profile?.birthday || "",
    gender: profile?.gender || "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(form);
    navigator("/home");
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
          <input
            className="w-40  "
            type="text"
            name="gender"
            onChange={(e) => {
              setForm({ ...form, gender: e.target.value });
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
              navigator("/home");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default Profile;
