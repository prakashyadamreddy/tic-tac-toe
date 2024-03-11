const intialGameBoard =[
[null, null, null],
[null, null, null],
[null, null, null]
];

export default function GameBoard () {
    return (
        <ol id="game-board">
            {
                intialGameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((column, columnIndex) => (
                                <li key={columnIndex}>
                                    <button>{column}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}