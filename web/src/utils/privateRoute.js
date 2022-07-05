import * as helper from "./helper";
import PageNotFound from "../pages/NotFound";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = helper.sessionGet("access_token");
  if (isAuthenticated) {
    return children;
  } else {
    return <PageNotFound />;
  }
};
export default PrivateRoute;
