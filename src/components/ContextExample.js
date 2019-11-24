import React, {useContext, useState, useReducer} from 'react';
import {ThemeContext} from "../components/contextConfig";
import {reducer, initialState} from "./reducer";
import InputName from "./InputName";

function ContextExample (props){
    console.log("==ContextExample==",props);
    return (
        <div>
            <h1>ContextExample</h1>
            <Toolbar/>

        </div>
    );
}

function Toolbar(props) {
    console.log("==Toolbar==", props);
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton(props) {
    console.log("==ThemedButton props==", props);
    const theme = useContext(ThemeContext);
    console.log("==ThemedButton theme==", theme);
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("==sate==", state);
    {console.log("==dispatch==" , dispatch)}

    let [color, setColor] = useState(true)
    const handlChangeColor  = () => {
        setColor(!color)
    }

    let [bCount, setBCount] = useState(0)

    const incCount = () => {
        setBCount(bCount+1)
        dispatch({type: 'increment'})
    };
    const decCount = () => {
        setBCount(bCount-1)
        dispatch({type: 'decrement'})
    };

    const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            {console.log("==theeme==" , theme)}
            <button style={{ background: theme[`${color ? 'dark': 'light'}`].background, color: theme[`${color ? 'dark': 'light'}`].foreground }} onClick={handlChangeColor}>
                I am styled by theme context!
            </button>

            <div>

                <div>Local Count: {bCount}</div>
                <div>Global Count: {state.count}</div>

                <div>
                    <button onClick={incCount}>+</button>
                    <button onClick={decCount }>-</button>
                </div>
                <input type="text"
                       name='name'
                       value={name}
                       onChange={handleChange}/>
            </div>
            <InputName/>


        </div>
    );
}

export default ContextExample;