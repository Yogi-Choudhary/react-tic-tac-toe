import { useState } from "react";
export default function Playe ({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing]  = useState(false);
  function handleEditclick (){
    setIsEditing((editing) => !editing);
  }

  function handleChange (event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit'
  if (isEditing){
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange}/>
    );
    // btnCaption = 'Save'
  } 
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditclick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}