export const ADD_ITEM = "ADD_ITEM"

export const addItemAction = (text) => {
    return {
        type: ADD_ITEM,
        payload: {
            text
        }
    }
}

export const DELETE_ITEM = "DELETE_ITEM"

export const deleteItemAction = (index) => {
    return {
        type: DELETE_ITEM,
        payload: {
            index
        }
    }
}