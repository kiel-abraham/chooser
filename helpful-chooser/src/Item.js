import React from 'react';

function Item (props) {
    return (
        <li className="list-group-item">
            {props.item}
            <i className="fa fa-window-close pull-right text-danger" aria-hidden="true"></i>
        </li>
    );
}

export default Item;