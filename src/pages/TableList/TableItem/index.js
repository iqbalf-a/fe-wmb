import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, ButtonGroup} from "react-bootstrap";

const TableItem = ({data, onNavigateToEdit, onDelete}) => {
    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center py-3 px-4"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold lead">{data?.number}</div>
                    {data?.status ? "Available" : "Unavailable"}
                </div>
                <ButtonGroup>
                    {/*<Button variant="primary" onClick={onNavigateToEdit}>Edit</Button>*/}
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </ListGroup.Item>
        </>
    )
}

export default React.memo(TableItem)