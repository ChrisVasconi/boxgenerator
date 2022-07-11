import './App.css';
import Boxscomponents from './components/BoxComponents'
import { useState } from 'react';

function App() {
  const [boxList, setBoxList] = useState([]);
  const addBox = (newBox) => {
    setBoxList([newBox, ...boxList]);
  }
  console.log(boxList)
  return (
    <div className="App">
      <Boxscomponents
        addBox={addBox}
      />
      <div className='sort'>
        {
          boxList.map((box, i) =>
            <div key={i}
              style={{ background: box.boxColor, height: box.boxSize, width: box.boxSize }}
            />)

        }
      </div>
    </div>
  );
}

export default App;

