import ListGroup from 'react-bootstrap/ListGroup';
import FoodItem from "./components/FoodItem";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import useFetchMutation from "../../hooks/useFetchMutation";
import {deleteFoodById, getFoods} from "../../services/foodApi";


const List = ({data, refetch}) => {

    const {fetchMutation: deleteFoodMutation} = useFetchMutation(
        deleteFoodById,
        refetch
    )
    const onDelete = (id) => () => {
        const isOk = window.confirm("Apakah anda yakin mengapus item ini?");
        if (isOk) {
            deleteFoodMutation(id)
        }
    };

    return (
        <>
            <ListGroup as="ol">
                {data?.map((item) => (
                    <FoodItem data={item} key={item.foodId} onDelete={onDelete(item.foodId)}/>

                ))}
            </ListGroup>

        </>
    )
}
export default (withPaginationList(List, {
        title: "Food List",
        label: "Add Food",
        navAdd: constants.ROUTES.ADD_FOOD,
        query: getFoods
    })
);