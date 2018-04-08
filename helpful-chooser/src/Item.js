import React, { Component } from 'react';

class Item extends Component {
    
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    
    render() {
        return (
            <li className="list-group-item">
                {this.props.item}
                <div className="close-item pull-right text-danger" onClick={this.remove}>
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                    <span className="sr-only">Remove</span>
                </div>
            </li>
        );
    }
    
    remove() {
        this.props.remove(this.props.item);
    }
}

export default Item;