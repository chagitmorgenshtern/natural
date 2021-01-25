import React, { Component } from 'react';
import './readMore.css'

export default class Clause extends Component {


    render() {
        return (
            <div id="clause">
                <img src={this.props.imgSrc} id="icon" />
                <label>{this.props.category}</label>
                <p>{this.props.text}</p>
            </div>
        );

    }
}