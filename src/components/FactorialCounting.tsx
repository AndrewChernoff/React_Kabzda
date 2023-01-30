import { useMemo, useState } from "react";

const FactorialCounting = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  let factorialA = 1;
  let factorialB = 1;

  
  useMemo(() => {
    for(let i = 1; i <= a; i++){
        factorialA = factorialA * i;
      }
  }, [a])
      


      for(let i = 1; i <= b; i++){
        factorialB = factorialB * i;
      }
      



  return (
    <div style={{marginTop: '150px'}}>
      <h2>FactorialCounting</h2>

      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} type='number'/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} type='number'/>

      <div>
        Result for a: {factorialA}
      </div>
      <div>
        Result for b: {factorialB}
      </div>
    </div>
  );
};

export default FactorialCounting;
