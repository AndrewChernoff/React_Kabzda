import { useState } from "react";

const OnOff = () => {
    const [isOn, setIsOn] = useState(false)

    return <div>
        <button style={{background: `${isOn? 'red' : 'grey'}`}} onClick={() => setIsOn(true)}>on</button>
        <button style={{background: `${isOn? 'grey' : 'red'}`}} onClick={() => setIsOn(false)}>off</button>
    </div>
}

export default OnOff;