import ListGroup from "react-bootstrap/ListGroup";
import withPaginationList from "../../hoc/withPaginationList";
import constants from "../../constants";
import TableItem from "./TableItem";
import useFetchMutation from "../../hooks/useFetchMutation";
import {deleteTableById, getTables} from "../../services/tableApi";

const List = ({data, refetch}) => {

    const {fetchMutation: deleteTableMutation} = useFetchMutation(
        deleteTableById,
        refetch
    )
    const onDelete = (id) => () => {
        const isOk = window.confirm("Apakah anda yakin mengapus item ini?");
        if (isOk) {
            deleteTableMutation(id)
        }
    };
    return (
        <>
            <ListGroup as="ol">
                {data?.map((item, index) => (
                    <>
                        <TableItem data={item} key={item.tableId} onDelete={onDelete(item.tableId)}/>
                    </>


                ))}
            </ListGroup>
        </>
    )
}


export default (
    withPaginationList(List, {
        title: "Table List",
        label: "Add Table",
        navAdd: constants.ROUTES.ADD_TABLE,
        query: getTables
    })
);