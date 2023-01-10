import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {Button, ButtonGroup, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {connect} from "react-redux";
import useAddTable from "./useAddTable";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addTable} from "../../services/tableApi";

const FORM_LIST = [
    {id: "number", label: "Number", type: "text", placeholder: "Enter number"},
];

const AddTable = () => {
    const {getter, setter} = useAddTable();
    const navigate = useNavigate();

    const {fetchMutation, loading} = useFetchMutation(
        addTable,
        () => navigate(constants.ROUTES.TABLE_LIST)
    );

    const handleSubmit = (e) => {

        e.preventDefault();
        const payload = new FormData();
        payload.append("number", getter.number);
        fetchMutation(payload);
    };

    return (
        <>
            <div className="container">
                <h2 className="my-4">Add Table</h2>
                <FormGroup>
                    {FORM_LIST.map((item) => (
                        <>
                            <FormLabel> {item.label} </FormLabel>
                            <FormControl className="mb-3"
                                         placeholder={item.label}
                                         type={item.type}
                                         value={getter[item.id]}
                                         onChange={setter[item.id]}
                                         key={item.id}
                                         isValid={!!getter[item.id]}
                            />
                        </>
                    ))}
                    <ButtonGroup>
                        <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
                            Add
                        </Button>
                        <Button variant="secondary" onClick={() => navigate(constants.ROUTES.TABLE_LIST)}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </FormGroup>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTable: (data) => dispatch(addTable(data)),
    };
};

export default connect(null, mapDispatchToProps)(AddTable);
