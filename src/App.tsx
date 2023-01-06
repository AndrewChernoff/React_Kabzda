import { useState } from "react";
import Accordion from "./components/Accordion";
import OnOff from "./components/OnOff";
import UncontrolledRating from "./components/UncontrolledRating";

export interface Title {
  title: string;
}

interface Selected {
  selected: boolean;
}

interface RatingProps {
  value: number;
}

function App() {
  return (
    <div>
      <OnOff />
      <PageTitle title={"This is app component"} />
      <Accordion title={"Menu"}/>

      {/* <UncontrolledRating/> */}
      <Rating />
      <hr/>
    </div>
  );
}


const Rating = () => {
  const [value, setValue] = useState(0);

  const changeRating = (value: number) => setValue(value)

  return <>
  <Star selected={value > 0} changeRating={() => changeRating(1)}/>
  <Star selected={value > 1} changeRating={() => changeRating(2)}/>
  <Star selected={value > 2} changeRating={() => changeRating(3)}/>
  <Star selected={value > 3} changeRating={() => changeRating(4)}/>
  <Star selected={value > 4} changeRating={() => changeRating(5)}/>
  </>
}

const Star = ({selected, changeRating}: any) => {
  return <span onClick={changeRating}> {selected? <b>Star</b> : 'Star'} </span>
}


const PageTitle = ({ title }: Title) => {
  return <h1> {title} </h1>;
};

export default App;
