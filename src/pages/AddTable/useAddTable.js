import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddTable = () => {
    const [number, setNumber] = React.useState("");
    // const [status, setStatus] = React.useState("available");

    const [isDisable, setDisable] = React.useState(true);

    const getter = {number, isDisable};
    const setter = {
        number: onChangeText(setNumber),
    }

    React.useEffect(() => {
        if (number) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [number])

    return {
        getter, setter
    }
}

export default useAddTable;