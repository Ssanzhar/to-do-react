import './App.css';
import React from 'react';
import Header from './components/HeaderComponent';
import Buttons from './components/ButtonsComponent';
import Name from './components/NameComponent';
import ToDoComponent from './components/ToDoComponent';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='main'>
        <Header/>
        <Buttons/>
        <Name/>
        <ToDoComponent/>
      </div>
    );
  }
}

export default App
