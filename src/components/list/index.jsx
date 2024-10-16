import classes from "./list.module.css"
import Button from "../button"
import Trash from "../trash"
import Checkbox from "../checkbox"
import { useEffect, useRef, useState } from "react"
import useStickyState from "./useStickyState.jsx"
import { to } from "@react-spring/web"




export default function List() {
    //Array of Tasks
    const [tasks, setTasks] = useStickyState(
        [
            { text: "Take out the trash", id: crypto.randomUUID(), deleted: false, comepleted: true },
            { text: "Do your homework", id: crypto.randomUUID(), deleted: false, comepleted: false },
            { text: "Practice chess endgames", id: crypto.randomUUID(), deleted: false, comepleted: false }
        ],
        "tasks"
    );

    //Text while person is editing his task (yes, I assumed his gender)
    const [newText, setNewText] = useState("")

    //Index of the element being Edited
    const [editIndex, setEditIndex] = useState(null)

    // Refs
    const taskRefs = useRef([]);
    const checkboxRefs = useRef([])


    // Function to add a new task and focus on its input
    function handleClick() {
        const newTask = { text: "", id: crypto.randomUUID(), deleted: false, comepleted: false};
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);

        // Set focus to the input of the newly added task after tasks are updated
        setTimeout(() => {
            taskRefs.current[newTasks.length - 1].focus();
        }, 0);
    }

    //Toggle Function
    function ToggleTask(index){
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
        console.log("task is toggled")
    }

    //Function to handle the Edit
    function handleEdit(){
    const newTasks = [...tasks]
        setTimeout(() => {
                    taskRefs.current[newTasks.length - 1].blur();
                }, 0);
    }

    //function to delete an Item
    function deleteToggle(index){
        const newTasks = [...tasks]
        newTasks[index].deleted = !newTasks[index].deleted
        const newTasksAD = newTasks.filter((newTask) => newTask.deleted !== true)
        setTasks(newTasksAD)
    }

    const textInputs = document.querySelectorAll('input[type="text"]');

    useEffect(() => {
        textInputs.forEach(textInput => textInput.style.width = textInput.value.length + "ch")
    })

    return (
        <div className={`list__container section ${classes.list}`}>
            <ul className={`${classes.UL}`}>
                {tasks.map((task, index) => {
                    return (
                        <li key={task.id} className={`${classes.list__item}`}>
                            <Checkbox ToggleTask={ToggleTask} index={index} completed={task.completed} id={task.id}/>
                            <span>
                            <input
                                type="text"
                                value={task.text}
                                onChange={(e) => {setNewText(e.target.value)}}
                                onBlur={() => handleEdit()} 
                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                             e.preventDefault();
                                                             handleEdit(); 
                                                              }
                                                         }}
                                className={`${classes.listItem__input} ${task.completed ? classes.lineThrough : ""}`}
                                ref={(el) => (taskRefs.current[index] = el)} // Assign ref to each input
                            />
                            </span>
                        
                            <Trash deleteToggle={deleteToggle} index={index} id={task.id} deleted={task.deleted}/>
                        </li>
                    );
                })}
            </ul>
            <Button handleClick={handleClick} />
        </div>
    );
}

// function handleEdit(index, newText){
//     const newTasks = [...tasks]
//     newTasks[index].text = newText;
//     setTasks(newTasks)
//     setEditIndex(null)
//     setTimeout(() => {
//         taskRefs.current[newTasks.length - 1].blur();
//         setNewText("")
//     }, 0);
// }

// <input
//                                 type="text"
//                                 value={task.text}
//                                 onChange={(e) => {setNewText(e.target.value)}}
//                                 onBlur={() => handleEdit(index, newText)} 
//                                 onKeyDown={(e) => {
//                                     if (e.key === "Enter") {
//                                         e.preventDefault();
//                                         handleEdit(index, newText); 
//                                     }
//                                 }}
//                                 className={`${classes.listItem__input}`}
//                                 ref={(el) => (taskRefs.current[index] = el)} // Assign ref to each input
//                             />