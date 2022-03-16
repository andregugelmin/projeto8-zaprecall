import ReactDOM from 'react-dom'
import StartScreen from './StartScreen';

function App(){
    return(
        <>
            <StartScreen/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));