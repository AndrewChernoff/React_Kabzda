import { useState } from "react";

const UncontrolledRating = () => {
    const [value, setValue] = useState(5);

  return<> 
  <Star selected={value > 0} value={1} setValue={setValue}/> 
  <Star selected={value > 1} value={2} setValue={setValue}/>
  <Star selected={value > 2} value={3} setValue={setValue}/>
  <Star selected={value > 3} value={4} setValue={setValue}/>
  <Star selected={value > 4} value={5} setValue={setValue}/>
  </>;
};

const Star = ({selected, value, setValue}: any) => {
  return <> 
  <span onClick={() => {
    console.log(value);
    
    setValue(value)}}>{selected? <b>Star</b>: 'Star'} </span> 
  </>
};

export default UncontrolledRating;
