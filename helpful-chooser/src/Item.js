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
                <i className="fa fa-window-close pull-right text-danger" aria-hidden="true" onClick={this.remove}></i>
            </li>
        );
    }
    
    remove(){
        this.props.remove(this.props.id, this.props.item);
    }
}

export default Item;