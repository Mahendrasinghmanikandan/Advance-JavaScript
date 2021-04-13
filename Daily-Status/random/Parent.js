import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: "" };
    }
    display = (event) => {
        //console.log(event)
        this.setState({ data: event.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.display} />
                <Child go={this.state.data} />
            </div>
        )
    }
}
