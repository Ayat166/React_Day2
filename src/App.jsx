import ButtonInput from './components/ButtonInput';
import NavBar from './components/NavBar'; 
import Counter from './components/Counter';
import {useState} from "react";
function App() {
  const [counter, setCounter] = useState(0);
  function setCounterValue(sign){
    if (sign == 'Increase')
    {
      return setCounter(state => (state + 1))
    }
    else if(sign == 'Decrease' && counter!=0)  {
      return setCounter(state => (state - 1))
    }
  }
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center m-5 gap-3">
        <Counter counter={counter}/>
        <ButtonInput sign="Increase" setCounterValue={setCounterValue}/>
        <ButtonInput sign="Decrease" setCounterValue={setCounterValue}/>
      </div>

    </div>
  )
}

export default App
