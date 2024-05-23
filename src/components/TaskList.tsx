import {useState, FormEvent, ChangeEvent} from 'react'
import {PlusCircle} from 'phosphor-react'
import {v4 as uuidv4} from 'uuid'

import style from './TaskList.module.css'

import clipBoardImg from '../assets/Clipboard.png'
import { TaskItem } from './TaskItem';

interface Task {
    id: string; 
    description: string;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        const newTaskObject = {
            id: uuidv4(),
            description: newTask,
        }

        setTasks([...tasks, newTaskObject])
        setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }
    
    return(
        <section className={style.taskSection}>
            <form onSubmit={handleCreateNewTask} className={style.taskForm}>
                <input value={newTask} onChange={handleNewTaskChange} type="text" placeholder='Adicione uma nova tarefa' required/>
                <button className={style.formButton} type="submit">Criar <PlusCircle color='var(--gray-100)' size={16}/></button>
            </form>
            <main className={style.taskList}>
                <header className={style.taskListHeader}>
                    <div>
                        <strong className={style.created}>Tarefas criadas</strong>
                        <div className={style.infoCircle}>
                            <strong>0</strong>
                        </div>
                    </div>
                    <div>
                        <strong className={style.done}>Concluídas</strong>
                        <div className={style.infoCircle}>
                            <strong>0</strong>
                        </div>
                    </div>
                </header>
                {tasks.length == 0 ?
                    <div className={style.emptyListContent}>
                        <img className={style.clipBoardImg} src={clipBoardImg} alt="A gray icon of a document with three lines, representing a list." />
                        <div className={style.textContent}>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>    
                : 
                    tasks.map(task => {
                        return(
                            <TaskItem key={task.id} description={task.description} />
                        )
                    })
                }
                
            </main>
        </section>
    )
}