import React from 'react';
import Logo from './assets/logo.png'

export default function StartScreen(props){
    const {callback} = props;
    const [zapGoal, setGoal] = React.useState(0);
    let button = <></>;
    

    if(zapGoal > 0) button = (<button className='button-unlocked' onClick={() => callback(zapGoal)}>Iniciar Recall!</button>)
    else button = (<button className='button-locked'>Iniciar Recall!</button>)
    
    return(
        <div className={"start-screen"}>
            <img src= {Logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <input type="text" placeholder='Digite sua meta de zaps...' onChange={(event)=>{setGoal(event.target.value)}}/>
            {button}
        </div>

    )
}   