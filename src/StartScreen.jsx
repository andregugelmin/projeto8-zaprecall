import Logo from './assets/logo.png'

export default function StartScreen(props){
    const {hidden, callback} = props;
    const htmlClasses = `start-screen ${hidden ? "hidden" : ""}`;
    return(
        <div className={htmlClasses}>
            <img src= {Logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <button onClick={callback}>Iniciar Recall!</button>
        </div>

    )
}   