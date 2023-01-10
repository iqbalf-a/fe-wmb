import constants from "../../constants";

export const addFood = (food) => ({
    type: constants.ACTION.ADD_FOOD,
    payload: {
        foodId: Math.random().toString(36).substring(2, 7),
        foodName: food.foodName,
        price: food.price
    }
})

export const deleteFood = (id) => ({
    type: constants.ACTION.DELETE_FOOD,
    payload: id
})