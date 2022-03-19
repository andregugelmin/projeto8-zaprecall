import ReactDOM from 'react-dom'
import MainScreen from './MainScreen';
import StartScreen from './StartScreen';
import React from 'react';

function App(){
    const [isHidden, setHidden] = React.useState(false);

    return(
        <>
            <StartScreen hidden={isHidden} callback={() => setHidden(true)}/>
            <MainScreen numberOfCards = {4} hidden={!isHidden}/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));