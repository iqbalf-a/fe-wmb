import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, ButtonGroup} from "react-bootstrap";

const FoodItem = ({data, onDelete}) => {
    return (
        <>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center py-3 px-4"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold lead">{data?.foodName}</div>
                    Rp. {Number(data?.price).toLocaleString("id-ID")}
                    <div className="text-secondary">
                        {data?.category.categoryName}
                    </div>
                </div>
                <ButtonGroup>
                    {/*<Button variant="primary" onClick={onNavigateToEdit}>Edit</Button>*/}
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </ListGroup.Item>
        </>
    )
}

export default React.memo(FoodItem)