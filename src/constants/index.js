const constants = {
    ACTION: {
        ADD_FOOD: "ADD_FOOD",
        EDIT_FOOD: "EDIT_FOOD",
        DELETE_FOOD: "DELETE_FOOD",

        ADD_TABLE: "ADD_TABLE",
        EDIT_TABLE: "EDIT_TABLE",
        DELETE_TABLE: "DELETE_TABLE",

    },
    ROUTES: {
        DASHBOARD: "/",

        AUTH: "/auth",
        LOGIN: "/auth/login",

        FOOD_LIST: "/food",
        ADD_FOOD: "/food/add",
        EDIT_FOOD: "/food/edit",

        TABLE_LIST: "/table",
        ADD_TABLE: "/table/add",
        EDIT_TABLE: "/table/edit"
    },
    DATA: {
        EMAIL: "admin@example.com",
        PASSWORD: "11111111"
    }
}

export default constants;