import { useState } from 'react';
import './App.css';

const App = ()=> {
  const [diceNumber, setDiceNumber] = useState(6);
  const [diceNumber2, setDiceNumber2] = useState(1);
  
  //Method For Generate Randam Number
  const refreshDice = ()=>{
    const random = Math.floor(Math.random() *6) +1;
    setDiceNumber(random);
  }
  const refreshDice2 = ()=>{
    const random2 = Math.floor(Math.random()*6) +1;
    setDiceNumber2(random2);
  }
  return (
    <div className="App">
      <img src={require(`./images/${diceNumber}.png`)} width={300} height={300} alt="images" />
      <img src={require(`./images/${diceNumber2}.png`)} width={300} height={300} alt="images" /><br/>
      <button className="button" onClick={()=>refreshDice()}>P1(Roll)</button>
      <button className="button" onClick={()=>refreshDice2()}>P2(Roll)</button>
      
    
    </div>
  );
}

export default App;
