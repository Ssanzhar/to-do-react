import React from 'react';
import './index.css';
import {trash} from './trash';

class TrashButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button className='trash'>
                {trash}
                <p>Move to Trash</p>
            </button> 
            
        );
    }
}

export default TrashButton;