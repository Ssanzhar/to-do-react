import React from 'react';
import ToDoButton from './ToDoButton';
import './index.css';
import PlusButton from './PlusButton';

class Buttons extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main-buttons'>
                <div className="to-do-buttons">
                    <ToDoButton text={'To Do'} flag={true}/>
                    <ToDoButton text={'Done'} flag={false}/>
                    <ToDoButton text={'Trash'} flag={false}/>
                </div>
                <div className="plus-button">
                    <PlusButton/>
                </div>
            </div>
        );
    }
}

export default Buttons;