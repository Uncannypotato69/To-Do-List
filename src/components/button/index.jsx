import classes from "./button.module.css"
import Boop from "../header/boop"
import { animated } from "@react-spring/web"

export default function Button({handleClick}){
    return(
        <button className={`${classes.button}`} onClick={handleClick} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${classes.button__svg}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <p className={`${classes.button__text}`}>Add</p>
        </button>
    )
}