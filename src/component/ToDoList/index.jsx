import React from "react";
import ToDoItem from "../ToDoItem";
import ToDoInput from "../ToDoInput"
import { connect } from "react-redux";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.items);
        return ( 
            <div>
                {
                    this.props.items.map((item, index) => <ToDoItem
                    value={item} index={index} key={index} />)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.toDoItems
    }
}

export default connect(mapStateToProps)(ToDoList);