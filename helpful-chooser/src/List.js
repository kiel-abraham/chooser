import React from 'react';
import Item from "./Item";

function List (props) {
    return (
        <ul className="list-group">
            {props.list.map(c => <Item key={c.id} item={c.text} />)}
        </ul>
    );
}

export default List;