import constants from "../../constants";
import {TableList} from "../../pages";
import AddTable from "../../pages/AddTable";

const {ROUTES} = constants;

const tableRoutes = {
    path: ROUTES.TABLE_LIST,
    children: [
        {index: true, element: <TableList/>  },
        {path: ROUTES.ADD_TABLE, element: <AddTable/> },
    ]
}

export default tableRoutes;