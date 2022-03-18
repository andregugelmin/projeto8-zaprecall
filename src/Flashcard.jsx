import React from 'react';

export default function Flashcard(props){
    const {number, question, answer} = props;

    const options = [
        {color: 'red', text:"Não lembrei"},
        {color: 'yellow', text:"Quase não lembrei"},
        {color: 'green', text:"Zap!"}
    ]

    const [selection, setSelection] = React.useState('unselected');
    const [answered, setAnswered] = React.useState(0);
    const [answeredClass, setAnsweredClass] = React.useState('');
    const icons = [
        "play-outline",
        "close-circle-sharp",
        "help-circle-sharp",
        "checkmark-circle-sharp"
    ]

    const answerClass = ['bad', 'medium', 'good'];

    function selectOption(number){
        setAnswered(number);
        setSelection('unselected');
        setAnsweredClass(answerClass[number-1]);
    }
    
    
    return (selection==='unselected') ? (
            <div className="flashcard">
                <div className={`unselected ${answeredClass}`}>
                    <p>Pergunta {number}</p>
                    <ion-icon name={icons[answered]} onClick={()=> {if(answered===0 ) setSelection('question')}}></ion-icon>
                </div>  
            </div>
    ) : (selection === 'question') ? (
            <div className="flashcard">
                <div className="question">
                    <p>{question}</p>
                    <img src= 'assets/setinha.png' alt='setinha' onClick={()=> setSelection('answer')}/>
                </div>
            </div>
    ) : (
        <div className="flashcard">
                <div className="answer">
                    <p>{answer}</p>
                    <div className="options">
                        {options.map((option,index) => <Option color = {option.color} text = {option.text} callback = {selectOption} number={index+1}/>)}
                    </div>   
                </div>    
            </div>
    )
}

function Option(props){
    const {color, text, callback, number}= props;

    return(
        <>
            <span className={`${color} + option`} onClick={()=> callback(number)}>{text}</span>
        </>
    )
}