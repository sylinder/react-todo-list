import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import ToDoItem from "../ToDoItem";

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map(item => <ToDoItem item={item} key={item.id}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todoItems
    }
}

ToDoList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        mark: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default connect(mapStateToProps) (ToDoList)