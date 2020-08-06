import React from "react"
import ToDoInput from "../ToDoInput"
import ToDoList from "../ToDoList"

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <ToDoInput/>
                <ToDoList/>
            </div>
        )
    }
}

export default HomePage;