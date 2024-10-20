import classes from "./trash.module.css"
import useSound from "use-sound"
import { useState, useContext } from "react"
import Boop from "../header/boop"
import popSFX from "/audio/pop.mp3"
import { SoundContext } from "../../Sound"



export default function Trash({deleteToggle, index, id}){

    const [isActive, setIsActive] = useState(false)
    
    const {sound} = useContext(SoundContext)

    const [play] = useSound(popSFX, {volume: 1, playbackRate: 1.2, soundEnabled: sound})

    return(

        <label htmlFor={`${id}KadduBhai`} className={`${classes.trash__label}`} >
            <input type="checkbox" id={`${id}KadduBhai`} className={`${classes.trash__input}`} onClick={play} onChange={() => {setIsActive(!isActive); deleteToggle(index)}}/>
            <Boop x={0} y={0} rotation={-7} scale={1} timing={300} cls={`${classes.trash__bin}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={`${classes.trash__svg}`}>
                        <path stroke="#0C0C0C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="m19.654 12-.462 12m-6.384 0-.462-12m13.29-4.28c.457.07.911.143 1.364.222m-1.363-.221-1.424 18.51A3 3 0 0 1 21.222 29H10.778a3 3 0 0 1-2.991-2.77L6.363 7.72m19.274 0A64.153 64.153 0 0 0 21 7.193m-16 .75a63.82 63.82 0 0 1 1.363-.221m0 0A64.149 64.149 0 0 1 11 7.192m10"/>
                        <path stroke="#0c0c0c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" d="M11 7.192 L21 7.192 V5.971 C21 4.398 19.786 3.085 18.214 3.035 A69.264 69.264 0 0 0 13.786 3.035 C12.214 3.085 11 4.398 11 5.971 V7.192" className={`${classes.trash__lid}` }/>
                     </svg>
            </Boop>
                   
        </label>
    )
}


