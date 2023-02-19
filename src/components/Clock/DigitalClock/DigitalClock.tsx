import { useEffect, useState } from "react";

const DigitalClock = () => {
    const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const setNums = (param: number) => {
    if(param < 10) {
      return '0' + param
    } else {
      return param
    }
  }

  return (
    <div>
    <span>
      {setNums(date.getHours())}
    </span>
    :
    <span>
      {setNums(date.getMinutes())}
    </span>
    :
    <span>
      {setNums(date.getSeconds())}
    </span>
    </div>
  );
}

export default DigitalClock