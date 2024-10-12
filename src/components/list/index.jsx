import classes from "./list.module.css"
import Button from "../button"
import useStickyState from "./useStickyState"
import { useState } from "react"


export default function List(){

    const [tasks, setTasks] = useState([{text:"Take out the trash", id: crypto.randomUUID()}], "tasks")

    return(
        <div className={`list__container section ${classes.list}`}>
            <ul>
                {
                    tasks.map((task, index) => {
                        return(
                            <li key={task.id}>
                                <p>{task.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Button/>
        </div>
    )
}