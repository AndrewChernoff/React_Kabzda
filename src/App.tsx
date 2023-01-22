import { useState } from "react";
import Accordion from "./components/Accordion";
import OnOff from "./components/OnOff";
import Select from "./components/Select/Select";
import UncontrolledRating from "./components/UncontrolledRating";

export interface Title {
  title: string;
}

function App() {

  return (
    <div>
      <OnOff />
      <PageTitle title={"This is app component"} />
      <Accordion title={"Menu"}/>

      <UncontrolledRating/>
      <hr/>

      <Select />
    </div>
  );
}




const PageTitle = ({ title }: Title) => {
  return <h1> {title} </h1>;
};

export default App;
