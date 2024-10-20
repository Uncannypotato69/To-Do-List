import { createRoot } from "react-dom/client"
import { createContext, useContext, useState } from "react"
import Main from "./main"
import "./styles/modern-normalize.css"
import './styles/style.css'
import './styles/utils.css'
import { ThemeProvider } from "./Theme"
import { SoundProvider } from "./Sound"


createRoot(document.querySelector("#root")).render(<App/>)

function App(){
  return(
    <SoundProvider>
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
    </SoundProvider>
  )
}