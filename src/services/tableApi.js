import api from "../config/api";

export const getTables = (page) => api.get("/tables", {
    params: {
        page
    }
});

export const addTable = (data) => {
    return api.post("/tables", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const deleteTableById = (id) => {
    return api.delete("/tables/" + id)
}


export const getTableById = (id) => {
    return api.get("/tables/" + id);
};

