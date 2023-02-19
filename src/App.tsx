import { useMemo, useState } from "react";
import Accordion from "./components/Accordion";
import DigitalClocklock from "./components/Clock/DigitalClock/DigitalClock";
import RotatingClock from "./components/Clock/RotatingClock/RotatingClock";
import FactorialCounting from "./components/FactorialCounting";
import OnOff from "./components/OnOff";
import Select from "./components/Select/Select";
import UncontrolledRating from "./components/UncontrolledRating";
import UseCallBack from "./components/UseCallBack";
import UserList from "./components/Users";
import Users from "./components/Users";
import s from "./App.module.css";
import Clock from "./components/Clock/Clock";

export interface Title {
  title: string;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["John", "Sarah", "Derek", "Cameron"]);

  const onAddClick = () => {
    setUsers([...users, "NoName"]);
  };

  const memorizedUsers = useMemo(() => {
    return [...users];
  }, [users]);

  console.log("counter");
  return (
    <>
      <div style={{ margin: "20px 0 20px 0" }}>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        <UserList users={memorizedUsers} onAddClick={onAddClick} />
      </div>

      <hr />
      <div>
        <OnOff />
        <PageTitle title={"This is app component"} />
        <Accordion title={"Menu"} />

        <UncontrolledRating />
        <hr />

        <Select />

        <FactorialCounting />

        <hr />
        <UseCallBack />
        <hr />

        <div className={s.clockBlock} style={{position: 'relative'}}>
          <Clock />
        </div>
      </div>
    </>
  );
}

const PageTitle = ({ title }: Title) => {
  return <h1> {title} </h1>;
};

export default App;
