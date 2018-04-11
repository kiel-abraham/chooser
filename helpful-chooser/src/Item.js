import React, { Component } from 'react';


class Item extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    
    remove() {
        this.props.remove(this.props.text);
    }
    
    render() {
        let active;
        if (this.props.result === this.props.text) {
            active = "active";
        }
        
        return (
            <li className={`list-group-item ${active}`}>
                {this.props.text}
            { !this.props.chosen ?
                <div className="close-item pull-right text-danger" onClick={this.remove}>
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                    <span className="sr-only">Remove</span>
                </div>
            :""}
            </li>
        );
    }
}

export default Item;