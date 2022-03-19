import ReactDOM from 'react-dom'
import MainScreen from './MainScreen';
import StartScreen from './StartScreen';
import React from 'react';

function App(){
    const [isRecalling, setRecalling] = React.useState(false);

    return !isRecalling ? <StartScreen callback={() => setRecalling(true)}/>
    : <MainScreen numberOfCards = {4} callback={() => setRecalling(false)}/>
}

ReactDOM.render(<App />, document.querySelector(".root"));