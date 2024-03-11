import { useState } from "react";

export default function Player ({name,symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(name)
    function editPlayer () {
        //setIsEditing(!isEditing);
        setIsEditing((editing) => !editing)
    };
    function handlingPlayerName (e) {
        setPlayerName(e.target.value);
    }
    return (
        <li>
            <span className = "player" >
                {(isEditing === false) ?
                <span className = "player-name">{playerName}</span> 
                :<input placeholder="player name" value={playerName} onChange={handlingPlayerName}/>
            }
                <span className = "player-symbol">{symbol}</span>
            </span>
            <button onClick={editPlayer}>{ (isEditing === true) ? "save" : "edit"}</button>
        </li>
    );
}