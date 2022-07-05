import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/NotFound";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import CreateCourse from "../pages/CreateCourse";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import * as helper from "../utils/helper";
import PrivateRoute from "../utils/privateRoute";

function Routers() {
  const profile = helper.sessionGet("profile");
  const role = JSON.parse(profile)?.role;
  return (
    <Routes>
      <Route path="*" exact={true} element={<PageNotFound />} />
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route
        exact
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/user/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="/course/create"
        element={
          role === "Instructor" ? (
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          ) : (
            <PageNotFound />
          )
        }
      />
    </Routes>
  );
}

export default Routers;
