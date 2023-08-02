import React from 'react';
import Counter from './counter';
import UseState from './UseState';
import List from './List';
import CountdownTimer from './CountdownTimer';
import Conditions from './Conditions';


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Counter />
      <UseState/>
      <List/>
      <CountdownTimer/>
      <Conditions/>
    </div>
  );
}


export default App;
