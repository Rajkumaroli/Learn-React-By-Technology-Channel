import React, {useState} from 'react';

const App = ()=>{
    const [number,setNumber] = useState(0);
    return <div>
        <h2>{number}</h2>
        <button className="button" onClick={()=>setNumber(number+1)}>Add</button>
        <button className="button" onClick={()=>setNumber(number-1)}>Less</button>
        <button className="button" onClick={()=>setNumber(0)}>Reset</button>
    </div>
}
export default App;