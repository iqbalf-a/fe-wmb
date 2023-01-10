import api from "../config/api";

export const getFoods = (page) => api.get("/foods", {
    params: {
        page
    }
});

export const addFood = (data) => {
    return api.post("/foods", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const deleteFoodById = (id) => {
    return api.delete("/foods/" + id)
}


export const getFoodById = (id) => {
    return api.get("/foods/" + id);
};

