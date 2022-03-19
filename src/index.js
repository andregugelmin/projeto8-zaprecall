import ReactDOM from 'react-dom'
import MainScreen from './MainScreen';
import StartScreen from './StartScreen';
import React from 'react';

function App(){
    const [isRecalling, setRecalling] = React.useState(false);
    const [zapGoal, setGoal] = React.useState(0);
    function startDeck(zapGoal){
        setGoal(zapGoal);
        setRecalling(true);
    }

    return !isRecalling ? <StartScreen callback={startDeck}/>
    : <MainScreen numberOfCards = {4} zapGoal = {zapGoal} callback={() => setRecalling(false)}/>
}

ReactDOM.render(<App />, document.querySelector(".root"));