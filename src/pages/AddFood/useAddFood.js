import React from "react";
import {onChangeText} from "../../utils/eventHandlers";

const useAddFood = () => {
    const [foodName, setFoodName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [categoryId, setCategoryId] = React.useState("")

    const [isDisable, setDisable] = React.useState(true);

    const getter = {foodName, price, categoryId, isDisable};
    const setter = {
        foodName: onChangeText(setFoodName),
        price: onChangeText(setPrice),
        categoryId: onChangeText(setCategoryId)
    }

    React.useEffect(() => {
        if (foodName && price &&categoryId) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [foodName, price, categoryId])

    return {
        getter, setter
    }
}

export default useAddFood;