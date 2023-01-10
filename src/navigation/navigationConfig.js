import constants from "../constants";
import {createBrowserRouter} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import foodRoutes from "./routes/foodRoutes";
import authRoutes from "./routes/authRoutes";
import tableRoutes from "./routes/tableRoutes";

const {ROUTES} = constants;

const navigationConfig = createBrowserRouter([
    {path: "*", element: <PageNotFound/> },
    {
        path: ROUTES.DASHBOARD,
        element: <ProtectedRoutes/>,
        children: [
            {index: true, element: <Dashboard/> },
            foodRoutes,
            tableRoutes
        ]
    },
    authRoutes
])

export default navigationConfig;