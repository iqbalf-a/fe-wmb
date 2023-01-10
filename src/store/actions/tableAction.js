import constants from "../../constants";

export const addTable = (table) => ({
    type: constants.ACTION.ADD_TABLE,
    payload: {
        tableId: Math.random().toString(36).substring(2, 7),
        number: table.number,
        status: table.status
    }
})

export const deleteTable = (id) => ({
    type: constants.ACTION.DELETE_TABLE,
    payload: id
})