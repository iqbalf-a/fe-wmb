import {Form, FormLabel, FormGroup} from "react-bootstrap";

const FormSelect = ({label, placeholder, values, onChange, value, disabled}) => (

    <FormGroup className="mb-3">
        <FormLabel>
            {label}
        </FormLabel>
        <Form.Select onChange={onChange}
                     isValid={value}
                     disabled={disabled}>
            <option disabled selected>{placeholder}</option>
            {values?.map((item) => (
                <option
                    value={item.id}
                    selected={item.id === value}
                >{item.label} </option>
            ))}

        </Form.Select>
    </FormGroup>

)

export default FormSelect;