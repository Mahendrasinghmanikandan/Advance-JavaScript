import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Wellcome"
        }
    }
    componentWillMount() {
        this.setState({ status: "wellcome Nesrin" })
    }
    render() {
        return (
            <div>
                {this.state.status}
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ status: "ThankYou" })
        }, 5000)
    }
    componentWillUpdate() {
        alert("componentWillUpdate")
    }
    componentDidUpdate() {
        alert("Updated successfully")
    }

    shouldComponentUpdate() {
        return true;
    }
    componentWillUnmount() {
        alert("componentWillUnmount")
    }

}

export default Lifecycle
