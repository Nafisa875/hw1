import { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

function App() {
  const [count, setCount] = useState(0);
   
  const IncrementCount = () => {
   if(count < 15)  setCount(count + 5)
  }

  const decrementCount = () => {
   if(count > 0) setCount(count - 5)
  }

  return (
    <div className="App">
       <h3>{count}</h3>
      <Decrement decrementCount={decrementCount}/>
       <Increment IncrementCount={IncrementCount}/> 
    </div>
  );
}

export default App;
