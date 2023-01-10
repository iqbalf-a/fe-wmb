import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {EmptyState} from "../components";
import Pagination from "../components/Pagination";
import useFetchQuery from "../hooks/useFetchQuery";
import LoadingState from "../components/LoadingState";

const withPaginationList = (ListComponent, opts) => {
    return (props) => {
        const navigate = useNavigate();

        const {label, query, title, navAdd} = opts;
        const [currentPage, setCurrentPage] = React.useState(1);

        const {data, loading, error, refetch} = useFetchQuery(query, currentPage);

        if (loading) return <LoadingState/>
        if (error) return <h2>Error...</h2>

        return (
            <>
                <div className="container my-4">
                    <h3>
                        {title}
                    </h3>
                    <div className="nav justify-content-end">
                        <Button variant="outline-success" onClick={() => navigate(navAdd)}
                                className="mb-3">+ {label}
                        </Button>
                    </div>
                    {data?.data?.length > 0 ? <ListComponent {...props} data={data?.data} refetch={refetch}/> :
                        <EmptyState text={`Data ${label} Kosong...`}/>}
                </div>
                <Pagination totalPage={data?.totalPage}
                            onChangeCurrentPage={setCurrentPage}
                            currentPage={currentPage}/>
            </>
        )
    }
}

export default withPaginationList;