import Theme from "./theme"
import Sound from "./sound"
import classes from "./header.module.css"

export default function Header(){
    return(
        <header className={`${classes.header}`}>
                <Theme/>
                <Sound/>
        </header>
    )
}