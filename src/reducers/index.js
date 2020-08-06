import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "../actions"

const initState = {
    todoItems: [],
    nextItemId: 1
}

export default (state = initState, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            return {
                todoItems: [...state.todoItems, {value: action.payload.text, id: state.nextItemId, mark: false}],
                nextItemId: state.nextItemId + 1
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                todoItems: state.todoItems.filter((ToDoItem) => ToDoItem.id != action.payload.index)
            }
        }

        case UPDATE_ITEM: {
            return {
                ...state,
                todoItems: state.todoItems.map(item => item.id === action.payload.index ? {...item, mark: !item.mark}: item)
            }
        }

        default:
            return state
    }
}