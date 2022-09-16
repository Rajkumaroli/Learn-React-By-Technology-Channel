import {useState} from 'react';
import ItemQuote from './ItemQuote';
const App = ()=>{
    const [items, setItems] = useState([]);

    //For Feth Data From the online
    const fetchData = ()=>{
        return fetch("https://jsonguide.technologychannel.org/quotes.json")
        .then((response)=>response.json())
        .then((data)=>{
            setItems(data);
        })
    }
    return <div>
        <button onClick={()=> fetchData()}>Fetch Data</button>
        {items.map((item)=><ItemQuote text={item.text} author={item.from} />)}
    </div>
}
export default App;