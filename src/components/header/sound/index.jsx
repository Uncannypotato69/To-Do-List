import { useContext, useState } from "react"
import classes from "./sound.module.css"
import Boop from "../boop"
import useStickyState from "../../list/useStickyState"
import { SoundContext } from "../../../Sound"
import useSound from "use-sound"
import soundOnSFX from "/audio/soundOn.mp3"
import soundOffSFX from "/audio/soundOff.mp3"

export default function Sound(){

    const [isActive, setIsActive] = useStickyState(false, "soundCheckbox")

    const soundOn = isActive ? `${classes.bottom}` : `${classes.top}`;
    const silence = isActive ? `${classes.top}` : `${classes.bottom}`;

    const {sound, toggleSound} = useContext(SoundContext)

    const [playOn] = useSound(soundOnSFX, {volume: 0.7, playbackRate: 1.3})
    const [playOff] = useSound(soundOffSFX, {volume: 0.6, playbackRate: 1.3})
    
    return(
        <label htmlFor="checkboxSound" className={`${classes.label} `}>
        <input type="checkbox" name="" id="checkboxSound" className={`${classes.checkbox}`} onClick={!sound ? playOn : playOff} onChange={() => {
            toggleSound()
            setIsActive(!isActive)
            }}/>
        <Boop x={-5} y={0} rotation={-5} scale={1} cls={soundOn}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${classes.icon} ${isActive ? classes.fade : ''}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        </Boop>  
        <Boop x={-5} y={0} rotation={-5} scale={1} cls={silence}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${classes.icon} ${!isActive ? classes.fade : ''}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        </Boop>  
       
        

        </label>


    )
}