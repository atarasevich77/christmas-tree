import React, {useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);

  const handleButton = () => {
    let tree = [];

    for(let i = 0; i < counter; i++){
      let star = '*';
      let zero = '0';
      for(let j = 0; j < i; j++){
        star += '*';
      }
      for(let k = 0; k < i; k++){
        zero += '0';
      }
      tree.push(star + zero);
    }
    setList(tree)
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setCounter(e.target.value)}/>
      <button onClick={handleButton}>Make a Tree</button>
      {
        list.map(el =>
            <div key={el}>{el}</div>
        )
      }
    </div>
  );
}

export default App;
