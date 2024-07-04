import React from 'react';
import './index.css';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='header'>
                <div className="header-text">
                    <p>Simple To Do List</p>
                </div>
                <div className="small-text">
                    <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
                </div>
            </div>
        );
    }
}

export default Header;