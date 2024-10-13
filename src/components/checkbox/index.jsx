import { useState } from "react"
import classes from "./checkbox.module.css"
import useSound from "use-sound"
import scribbleSFX from "/audio/writingPencil.mp3"

export default function Checkbox(){

    const [isActive, setIsActive] = useState(false)

    const [play] = useSound(scribbleSFX)

    return(
        <label htmlFor="doneCheckbox" className={`${classes.doneCheckbox__label}`}>
            <input type="checkbox" id="doneCheckbox" className={`${classes.doneCheckbox__input}`} onChange={() => setIsActive(!isActive)} onClick={play}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" className={`${classes.doneCheckbox__svg}`}>
  <path stroke="#FACC15" strokeOpacity="1" strokeWidth="1.5" d="m17.109 1.77 9.88 13.205L16.485 6.86l9.48 12.665L9.533 5.1l22.814 27.35L3.32 6.26l21.717 24.613L7.92 18.214 21.091 34.5 8.332 23.845l3.472 8.647" className={` ${classes.doneCheckbox__path} ${isActive ? classes.checked : ""}`}/>
            </svg>
           
        </label>
    )
}




