import { createRoot } from "react-dom/client"
import Main from "./main"
import "./styles/modern-normalize.css"
import './styles/style.css'
import './styles/utils.css'

createRoot(document.querySelector("#root")).render(
  <Main/>
)