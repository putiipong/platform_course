import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCourse } from "../api/course";
import { setLogout } from "../redux/slices/authSlice";
import { setAllCourse } from "../redux/slices/courseSlice";
import { sessionGet } from "../utils/helper";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = JSON.parse(sessionGet("profile"))?.role;
  const searchCourse = async () => {
    const data = await getAllCourse();
    if (search.length === 0) {
      dispatch(setAllCourse(data?.data));
    } else {
      dispatch(
        setAllCourse(data?.data.filter((data) => search.includes(data.name)))
      );
    }
  };

  useEffect(() => {
    searchCourse();
  }, [search]);
  return (
    <div className="h-9 flex justify-end items-center bg-slate-400 p-4">
      <div className="w-2/6">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {role === "Instructor" ? (
          <button
            className="font-semibold px-3 ml-2 rounded-lg border-2 border-slate-400 text-white bg-black "
            onClick={() => {
              navigate("/course/create");
            }}
          >
            Create Course
          </button>
        ) : null}
        <button
          className="font-semibold px-3 ml-2 rounded-lg border-2 border-slate-400 text-white bg-black "
          onClick={() => {
            dispatch(setLogout(navigate("/")));
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
