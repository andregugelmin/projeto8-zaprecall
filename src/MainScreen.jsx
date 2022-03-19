import React from 'react';
import Flashcard from './Flashcard';
import LogoPequeno from './assets/logo-pequeno.png'
import Party from './assets/party.png'
import Sad from './assets/sad.png'

let badAnswers = 0;

export default function MainScreen(props){
    let flashcards = [
        {question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        {question:"O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        {question:"Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        {question:"Podemos colocar __ dentro do JSX", answer: "expressões" }
    ]
    flashcards.sort(() => Math.random() - 0.5);


    const [icons, setIcons] = React.useState([]);
    const [color, setColor] = React.useState('red-icon');

    const {numberOfCards, hidden} = props;
    const htmlClasses = `main-screen ${hidden ? "hidden" : ""}`;

    const [cardsAnswered, setCardsAnswered] = React.useState(0);
 
    function updateCardsAnswered(iconName){        
        setCardsAnswered(cardsAnswered+1);
        setIcons([...icons, iconName]);
    }   

    return(
        <div className={htmlClasses}>
            <header>
                <img src= {LogoPequeno} alt='logo-pequeno'/>
                <h1>ZapRecall</h1>
            </header>
            <main>
                <div className="flashcards">                    
                    {flashcards.map((flashcard, index) => <Flashcard number = {index + 1} question={flashcard.question} answer={flashcard.answer} callback = {updateCardsAnswered}/>)}                                      
                </div>
            </main>
            <Footer cardsAnswered={cardsAnswered} numberOfCards={numberOfCards} icons={icons}/>
        </div>
    )
}

function Footer(props){
    const {cardsAnswered, numberOfCards, icons} = props;
    let finalMessage = ''
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
    }
    return(
        <footer>
            {finalMessage}
            <p>{cardsAnswered}/{numberOfCards} CONCLUÍDOS</p>
            <span className="footer-icons">
                {icons.map((icon) => <FooterIcon iconName = {icon}/>)}                                      
            </span>
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

