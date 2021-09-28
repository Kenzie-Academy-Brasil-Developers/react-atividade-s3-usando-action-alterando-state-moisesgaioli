import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import "./styles.css";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(newName));
  }

  return (
    
    <div>
      <input placeholder="Digite o nome" type="text" onChange={e => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default UserCard;