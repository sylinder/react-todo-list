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

export const UPDATE_ITEM = "UPDATE_ITEM"

export const updateItemAction = (index) => {
    return {
        type: UPDATE_ITEM,
        payload: {
            index
        }
    }
}