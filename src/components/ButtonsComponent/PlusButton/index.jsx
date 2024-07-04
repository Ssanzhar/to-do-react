import React from 'react';
import plus from '../../../assets/plus.png';
import './index.css';

class PlusButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <button className='plus'>
                <img src={plus} alt="plus" />
            </button>
        )
        
    }
}

export default PlusButton;