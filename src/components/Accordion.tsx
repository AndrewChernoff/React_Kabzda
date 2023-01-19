import { useReducer, useState } from "react";
import { Title } from "../App";
import { reducer } from "../reducer/reducer";

type UsersType = {
  id: number
  name: string
}


const Accordion = ({ title }: Title) => {

  type Action = {
    type: string
  }



  const [collapsed, dispatch] = useReducer(reducer, false)
  // [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState<UsersType[]>([
    {id: 1, name: 'Dimas'},
    {id: 2, name: 'Dimon'},
    {id: 3, name: 'Dimych'},
  ])

  const onUserNameClick = (obj: UsersType) => console.log(obj);

  return (
    <div>
      <h3 onClick={() => dispatch({ type: 'TOGGLE_COLLAPSE' })}/*setCollapsed(!collapsed)*/>{title}</h3>
      {!collapsed ? <AccordionBody users={users} callback={onUserNameClick}/> : null}
    </div>
  );
};

type AccordionBodyType = {
  users: UsersType[]
  callback: (obj: UsersType) => void
}

const AccordionBody = ({users}: AccordionBodyType) => {

  const onClickHandler = (obj:UsersType) => console.log(obj);
  

  return (
    <ul>
      {users.map( el => <li key={el.id} onClick={() => onClickHandler(el)}>{el.name}</li>)}
    </ul>
  );
};

export default Accordion;
