import './App.css';
import Square from './components/Square';
import Slider from './components/Slider';
import { useState } from 'react'

import PositionContext from './contexts/PositionContext'

function App() {
  let [xPos, setXPos] = useState(0);
  let [yPos, setYPos] = useState(0);
  let [rotate, setRotate] = useState(0);
  return (
    <PositionContext.Provider value={{ xPos, setXPos, yPos, setYPos, rotate, setRotate }}>
      <div className="App">
        <Square />
        <Slider />
      </div>
    </PositionContext.Provider>
  );
}

export default App;
