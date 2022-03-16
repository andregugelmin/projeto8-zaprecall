import ReactDOM from 'react-dom'
import MainScreen from './MainScreen';
import StartScreen from './StartScreen';

function App(){
    return(
        <>
            {/* <StartScreen/> */}
            <MainScreen/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));