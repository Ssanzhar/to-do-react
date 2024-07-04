import React from 'react';
import TrashButton from './TrashButton';

class ToDoComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <TrashButton/>
            </div>
        );
    }
}

export default ToDoComponent;