import { useState, useContext, useEffect } from "react"
import useSound from "use-sound"
import classes from "./theme.module.css"
import Boop from "../boop"
import onSFX from "/audio/on.mp3"
import { ThemeContext } from "../../../Theme"



function change(){
    document.body.classList.remove("white")
}

export default function Theme(){

    const [isActive, setIsActive] = useState(false)

    const [play] = useSound(onSFX)

    const sunClass = isActive ? `${classes.bottom}` : `${classes.top}`;
    const moonClass = isActive ? `${classes.top}` : `${classes.bottom}`;

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.classList.add(theme);
    
        return () => {
          document.body.classList.remove(theme);
        };
      }, [theme]);
  
    return(
        <label htmlFor="checkboxTheme" className={`${classes.label}`}>
            <input type="checkbox"  id="checkboxTheme" className={`${classes.checkbox}`} onClick={play} onChange={() => {
                toggleTheme()
            setIsActive(!isActive)
            }}/>
            <Boop x={0} y={0} rotation={0} scale={0.8} timing={300} cls={sunClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${classes.icon}  ${isActive ? classes.fade : ''}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
            </Boop>
            
            <Boop x={0} y={0} rotation={-20} scale={1} timing={200} cls={moonClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${classes.icon} ${!isActive ? classes.fade : ''}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        </Boop>

        </label>

    )
}

