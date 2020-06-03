import React, { Component } from 'react';
import Proptypes from "prop-types";

export default class Decrement extends Component {
    constructor(props){
        super(props);
        this.state= {
            val: props.start
        }
    }

    decrementVal= (state) => {
        if(state.val===0) return alert("You can't go below zero!")
        this.setState({val: state.val - 1}) 
    };

    render() {
        return (
            <div>
                {this.state.val}{" "}
                <button onClick={ () => this.decrementVal(this.state) } >
                    decrement
                </button>
            </div>
        )
    }
}
