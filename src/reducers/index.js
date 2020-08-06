 const reducer = (state = {todoItems:[]}, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                todoItems: [...state.todoItems, action.value]
            }
        }

        case 'DELETE_ITEM': {
            return {
                todoItems: state.todoItems.filter((todoItem, index) =>
                    index != action.index
                )
            }
        }

        default:
            return state
    }
}

export default reducer;