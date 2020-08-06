import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {addItemAction} from "../../actions"

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    
    addItem = () => {
        this.props.addItem(this.state.value);
        this.setState({value: ""})
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.addItem}>ADD</button>
            </div>
        )
    }
}

ToDoInput.propTypes = {
    addItem: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (text) => dispatch(addItemAction(text))
})

export default connect(null, mapDispatchToProps)(ToDoInput)