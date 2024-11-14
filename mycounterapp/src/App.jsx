import { useState } from "react";


const App = ()=>{

    const [value,setValue] = useState(0);

    const addValue =()=>setValue(value+1)
    const subValue =()=>setValue(value-1)
    const resetValue =()=>setValue(0)
    

    return (

        <div>
            <h1 id="value">{value}</h1>
            <div>
                <button onClick={addValue} id="increase">Increase</button>
                <button onClick={resetValue}>Reset</button>
                <button onClick={subValue}>Descrease</button>
            </div>
        </div>
      
    )

    
}


export default App;
        

