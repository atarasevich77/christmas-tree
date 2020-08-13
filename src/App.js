import React, {useState} from 'react';

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
    <div className="container">
      <div className="row justify-content-center">
        <input type="text" onChange={(e)=>setCounter(e.target.value)}/>
        <button className="btn btn-secondary" onClick={handleButton}>Make a Tree</button>
      </div>
        {
          list.map(el =>
              <div className="row justify-content-center"key={el}>{el}</div>
          )
        }
    </div>
  );
}

export default App;
