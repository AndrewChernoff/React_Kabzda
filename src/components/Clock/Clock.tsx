import { useState } from "react"
import DigitalClock from "./DigitalClock/DigitalClock"
import RotatingClock from "./RotatingClock/RotatingClock"

const Clock = () => {
    const [showDigital, setShowDigital] = useState(false)
    return <>
    <button onClick={() => setShowDigital(!showDigital)}>change</button>
    {showDigital? <DigitalClock/>
    : <RotatingClock/> }
    </>
}

export default Clock