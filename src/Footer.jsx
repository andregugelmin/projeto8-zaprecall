import React from 'react';
import Party from './assets/party.png'
import Sad from './assets/sad.png'



export default function Footer(props){
    const {zapGoal, zapAnswers, cardsAnswered, numberOfCards, icons, callback} = props;

    let finalMessage = '';
    let finalButton = '';

    if(cardsAnswered === numberOfCards){
        if(zapAnswers >= parseInt(zapGoal)){
            finalMessage = (
                <div className="final-message">
                    <span>
                        <img src={Party} alt="party"/>
                        <strong>Parabéns!</strong>
                    </span>                    
                    <p>Você atingiu sua</p>
                    <p>meta de zap!</p>
                </div>
            )
            
        }
        else{
            finalMessage = (
                <div className="final-message">
                    <span>
                        <img src={Sad} alt="sad"/>
                        <strong>Putz...</strong>
                    </span>                    
                    <p>Ainda faltam alguns...</p>
                    <p>Mas não desanime!</p>
                </div>
            )
        }  
        finalButton = <button className="footer-button" onClick={callback}>REINICIAR RECALL</button>      
    }
    return(
        <footer>
            {finalMessage}
            <p>{cardsAnswered}/{numberOfCards} CONCLUÍDOS</p>
            <span className="footer-icons">
                {icons.map((icon) => <FooterIcon iconName = {icon}/>)}                                      
            </span>
            {finalButton}
        </footer>
    )
}

function FooterIcon(props){
    const {iconName, callback} = props;
    let color = '';
    if(iconName === "close-circle-sharp"){
        color = 'red-icon'
    }  
    else if(iconName === "help-circle-sharp"){
        color = 'yellow-icon';
    }
    else{
        color = 'green-icon'
    }
    return <ion-icon name={iconName} class={color}></ion-icon> 
}