import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.go}</h1>
            </div>
        )
    }
}
