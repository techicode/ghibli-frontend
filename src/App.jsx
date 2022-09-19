import { useState } from 'react';

const counter = (setCount, count) => {
  setCount(count + 1)
};


function App() {
  const [count, setCount] = useState(2);

  return (
    <div className="App">
      <div className="left-side">
        <div className="bg-eggsheld">
          asd
        </div>
        <div className="bg-ice">
          asdsd
        </div>
        <div className="bg-very-light-pink">
          asd
        </div>
      </div>
    </div>
  );
}


export default App;
