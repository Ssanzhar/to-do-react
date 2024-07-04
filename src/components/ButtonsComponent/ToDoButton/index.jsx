import React from 'react';
import './index.css';

class ToDoButton extends React.Component {
    constructor() {
        super();
    }

    renderButton(flag) {
        if (flag) {
            return <button className='to-do-button' style={{backgroundColor: "#9098A3", color: "#FFFBFE", border: "none", cursor: "pointer"}}>{this.props.text}</button>;
        }
        return <button className='to-do-button' style={{backgroundColor: "#E4E5E7", color: "#23374A", border: "none", cursor: "pointer"}}>{this.props.text}</button>;
    }

    render() {
        const flag = this.props.flag;
        
        return this.renderButton(flag);
    }
}

export default ToDoButton;

