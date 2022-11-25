import { useState } from "react";
import { Title } from "../App";

const Accordion = ({ title }: Title) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <h3 onClick={() => setCollapsed(!collapsed)}>{title}</h3>
      {!collapsed ? <AccordionBody /> : null}
    </div>
  );
};

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

export default Accordion;
