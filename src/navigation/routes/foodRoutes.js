import constants from "../../constants";
import {FoodList} from "../../pages";
import AddFood from "../../pages/AddFood";

const {ROUTES} = constants;

const foodRoutes = {
    path: ROUTES.FOOD_LIST,
    children: [
        {index: true, element: <FoodList/>  },
        {path: ROUTES.ADD_FOOD, element: <AddFood/> },
    ]
}

export default foodRoutes;