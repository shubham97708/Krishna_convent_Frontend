import React from 'react';
import Trulia from './Trulia';
import AreaMap from './AreaMap';
import Local from './Local';
import SafetyAndCrime from './SafetyAndCrime';
import Homes from './Homes';


function App(props) {
  return (
    <div>
        <Trulia/>
      <AreaMap/> 
      <Local/>
      {/* <SafetyAndCrime/>  */}
      <Homes/>
    </div>
  );
}

export default App;
