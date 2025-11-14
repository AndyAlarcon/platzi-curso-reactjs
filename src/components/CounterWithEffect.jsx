import { useState, useEffect} from "react";
const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log(`El contador está en: ${count}`);
    },[count])

    return (
        <div>
            <p>El contador está en {count}</p>
            <button onClick={( ) => setCount(count + 1)}>Aumentar</button>
        </div>
    )
}
export default CounterWithEffect;