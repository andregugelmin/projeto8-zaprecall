import React from 'react';
import Flashcard from './Flashcard';
import Footer from './Footer';
import LogoPequeno from './assets/logo-pequeno.png'


export default function MainScreen(props){
    let flashcards = [
        {question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        {question:"O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        {question:"Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        {question:"Podemos colocar __ dentro do JSX", answer: "expressões" }
    ]
    flashcards.sort(() => Math.random() - 0.5);


    const [icons, setIcons] = React.useState([]);

    const {numberOfCards, callback, zapGoal} = props;

    const [cardsAnswered, setCardsAnswered] = React.useState(0);
    const [zapAnswers, setZapAnswers] = React.useState(0);
 
    function updateCardsAnswered(iconName){        
        setCardsAnswered(cardsAnswered+1);
        setIcons([...icons, iconName]);
        if(iconName === "checkmark-circle-sharp") setZapAnswers(zapAnswers+1);
    }   

    function restartRecall(){
        callback();
    }

    return(
        <div className={"main-screen"}>
            <header>
                <img src= {LogoPequeno} alt='logo-pequeno'/>
                <h1>ZapRecall</h1>
            </header>
            <main>
                <div className="flashcards">                    
                    {flashcards.map((flashcard, index) => <Flashcard number = {index + 1} question={flashcard.question} answer={flashcard.answer} callback = {updateCardsAnswered}/>)}                                      
                </div>
            </main>
            <Footer zapGoal={zapGoal} zapAnswers = {zapAnswers} cardsAnswered={cardsAnswered} numberOfCards={numberOfCards} icons={icons} callback = {restartRecall}/>
        </div>
    )
}



