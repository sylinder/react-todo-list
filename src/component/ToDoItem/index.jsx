import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteItemAction } from "../../actions"

class ToDoItem extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.item.value}</label>
                <button onClick={() => this.props.deleteItem(this.props.item.id)}>x</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (id) => dispatch(deleteItemAction(id))
})

ToDoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        mark: PropTypes.bool.isRequired
    }).isRequired,
    
    deleteItem: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(ToDoItem);