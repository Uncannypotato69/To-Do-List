import Theme from "./components/header/theme"
import Sound from "./components/header/sound"
import Header from "./components/header"
import Title from "./components/Title"
import List from "./components/list"
import { ThemeContext } from "./Theme"
import { useContext } from "react"

export default function Main(){

  const { theme } = useContext(ThemeContext);
  
  return(
    <div className={`app container section`}>
    <Header />
    <Title/>
    <List/>
  </div>
  )
}