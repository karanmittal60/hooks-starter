import React from 'react';
import ContextExample from "./components/ContextExample";
import {ThemeContext, themes} from './components/contextConfig'


function App() {
    return (
        <ThemeContext.Provider value={themes}>
            <ContextExample/>
        </ThemeContext.Provider>
    );
}

export default App;

