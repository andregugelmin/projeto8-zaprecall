import React from 'react';

export default function MainScreen(props){
    let flashcards = [
        {question:"O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        {question:"O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        {question:"Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        {question:"Podemos colocar __ dentro do JSX", answer: "expressões" },
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

function Flashcard(props){
    const {number, question, answer} = props;

    const [selection, setSelection] = React.useState('unselected');
    
    if(selection === 'unselected'){
        return(
            <div className="flashcard unselected">
                <p>Pergunta {number}</p>
                <ion-icon name="play-outline" onClick={()=> setSelection('question')}></ion-icon>
            </div>
        )
    }
    else if(selection === 'question'){
        return(
            <div className="flashcard question">
                <p>{question}</p>
                <img src= 'assets/setinha.png' alt='setinha' onClick={()=> setSelection('answer')}/>
            </div>
        )
    }

    else{
        return(
            <div className="flashcard answer">
                <p>{answer}</p>
                <div className="options">
                    <span className="red option">Não lembrei</span>
                    <span className="yellow option">Quase não lembrei</span>
                    <span className="green option">Zap!</span>
                </div>                
            </div>
        )
    }
    
}
