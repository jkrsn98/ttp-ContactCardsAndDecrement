import React, { Component } from 'react';
import Proptypes from "prop-types";

export default class ContactCard extends Component {
    static propTypes = {
        name: Proptypes.string.isRequired,
        mobile: Proptypes.string.isRequired,
        work: Proptypes.string,
        email: Proptypes.string.isRequired
    }

    render() {
        return (
            <div>
                <ul>
                    <h1>{this.props.name}</h1>    
                    <li>mobile: {this.props.mobile}</li>
                    <li>work: {this.props.work}</li>
                    <li>email: {this.props.email}</li>
                </ul>                
            </div>
        )
    }
}
