import Theme from "./components/header/theme"
import Sound from "./components/header/sound"
import Header from "./components/header"
import Title from "./components/Title"
import Button from "./components/button"


export default function Main(){
  return(
    <div className="app container section">
    <Header />
    <Title/>
    <Button/>
  </div>
  )
}