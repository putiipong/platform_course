import * as authAPI from "./auth";
import * as courseAPI from "./course";
import * as userAPI from "./user";

const API = { ...authAPI, ...courseAPI, ...userAPI };
export default API;
