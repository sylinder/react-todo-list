import React from "react"
import ToDoItem from "../ToDoItem"
import { connect } from "react-redux"

class FinishedItem extends React.Component {

    render() {
        return (
            <div> 
                {
                    this.props.items.map((item, index) => 
                        <ToDoItem item={item} key={index}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todoItems.filter(item => item.mark)
    }
}

export default connect(mapStateToProps)(FinishedItem)