import useAddFood from "./useAddFood";
import {useNavigate} from "react-router-dom";
import constants from "../../constants";
import {Button, ButtonGroup, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {connect} from "react-redux";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addFood} from "../../services/foodApi";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCategory} from "../../services/categoryApi";
import FormSelect from "../../components/FormSelect";

const FORM_LIST = [
    {id: "foodName", label: "Food Name", type: "text", placeholder: "Enter food"},
    {id: "price", label: "Price", type: "number", placeholder: "Enter price"},
];

const AddFood = () => {
    const {getter, setter} = useAddFood();
    const navigate = useNavigate();

    const {fetchMutation, loading} = useFetchMutation(
        addFood,
        () => navigate(constants.ROUTES.FOOD_LIST)
    );

    const {data: categoriesData} = useFetchQuery(getCategory);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = new FormData();
        payload.append("foodName", getter.foodName);
        payload.append("price", getter.price);
        payload.append("categoryId", getter.categoryId);
        fetchMutation(payload);
    };

    return (
        <>
            <div className="container">
                <h2 className="my-4">Add Food</h2>
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
                    <FormSelect label="Category"
                                placeholder="Select category"
                                onChange={setter.categoryId}
                                value={getter.categoryId}
                                values={categoriesData?.data?.map((item) => ({
                                    id: item.categoryId,
                                    label: item.categoryName
                                }))}/>
                    <ButtonGroup>
                        <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable || loading}>
                            Add
                        </Button>
                        <Button variant="secondary" onClick={() => navigate(constants.ROUTES.FOOD_LIST)}>
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
        addFood: (data) => dispatch(addFood(data)),
    };
};

export default connect(null, mapDispatchToProps)(AddFood);
