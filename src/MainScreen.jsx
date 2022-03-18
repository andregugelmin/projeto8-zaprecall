import React from 'react';
import Flashcard from './Flashcard';

export default function MainScreen(props){
    let flashcards = [
        {question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        {question:"O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        {question:"Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        {question:"Podemos colocar __ dentro do JSX", answer: "expressões" }
    ]

    const {hidden} = props;
    const htmlClasses = `main-screen ${hidden ? "hidden" : ""}`;
 
    flashcards.sort(() => Math.random() - 0.5);

    return(
        <div className={htmlClasses}>
            <header>
                <img src= 'assets/logo-pequeno.png' alt='logo-pequeno'/>
                <h1>ZapRecall</h1>
            </header>
            <main>
                <div className="flashcards">                    
                    {flashcards.map((flashcard, index) => <Flashcard number = {index + 1} question={flashcard.question} answer={flashcard.answer}/>)}                                      
                </div>
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}
