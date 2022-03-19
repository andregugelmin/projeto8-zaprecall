import React from 'react';
import Party from './assets/party.png'
import Sad from './assets/sad.png'

let badAnswers = 0;

export default function Footer(props){
    const {cardsAnswered, numberOfCards, icons, callback} = props;
    let finalMessage = '';
    let finalButton = '';
    if(cardsAnswered == numberOfCards){
        if(badAnswers===0){
            finalMessage = (
                <div className="final-message">
                    <span>
                        <img src={Party} alt="party"/>
                        <strong>Parabéns!</strong>
                    </span>                    
                    <p>Você não esqueceu de</p>
                    <p>nenhum flashcard!</p>
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
    const {iconName} = props;
    let color = '';
    if(iconName === "close-circle-sharp"){
        color = 'red-icon'
        badAnswers++;
    }  
    else if(iconName === "help-circle-sharp"){
        color = 'yellow-icon';
    }
    else{
        color = 'green-icon'
    }
    return <ion-icon name={iconName} class={color}></ion-icon> 
}