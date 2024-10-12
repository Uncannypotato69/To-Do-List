import Theme from "./components/header/theme"
import Sound from "./components/header/sound"
import Header from "./components/header"
import Title from "./components/Title"
import List from "./components/list"

export default function Main(){
  return(
    <div className="app container section">
    <Header />
    <Title/>
    <List/>
  </div>
  )
}