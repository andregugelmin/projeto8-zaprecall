import Logo from './assets/logo.png'

export default function StartScreen(props){
    const {callback} = props;
    return(
        <div className={"start-screen"}>
            <img src= {Logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <button onClick={callback}>Iniciar Recall!</button>
        </div>

    )
}   