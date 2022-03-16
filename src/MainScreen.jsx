export default function MainScreen(){
    return(
        <div className="main-screen">
            <header>
                <img src= 'assets/logo-pequeno.png' alt='logo-pequeno'/>
                <h1>ZapRecall</h1>
            </header>
            <main>
                <div className="flashcards">
                    <Flashcard number = {1}/>
                    <Flashcard number = {2}/>
                    <Flashcard number = {3}/>
                    <Flashcard number = {4}/>                    
                </div>
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}

function Flashcard(props){
    let number = props.number;
    return(
        <div className="flashcard">
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}