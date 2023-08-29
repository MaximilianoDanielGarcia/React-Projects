import { Square } from "./square";

export function WinnerModal(winner, resetGame) {

    if (winner == null) return null;

    const winnerText = winner ? 'Ganó: ' : 'Empate';
    
    return (
        <section className='winner'>
            <div>
            <h2>
                { winnerText }
            </h2>

            <header className='win'>
                {winner && <Square>{winner}</Square>}
            </header>
            <footer>
                <button onClick={resetGame}>New Game</button>
            </footer>
            </div>
        </section>
    )
}