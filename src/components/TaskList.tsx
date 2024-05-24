import {useState, FormEvent, ChangeEvent} from 'react'
import {PlusCircle} from 'phosphor-react'
import {v4 as uuidv4} from 'uuid'

import style from './TaskList.module.css'

import clipBoardImg from '../assets/Clipboard.png'
import { TaskItem } from './TaskItem';

interface Task {
    id: string; 
    description: string;
    isDone: boolean; 
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        const newTaskObject = {
            id: uuidv4(),
            description: newTask,
            isDone: false,
        }

        setTasks([...tasks, newTaskObject])
        setNewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function deleteComment(id: string) {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    function toggleTaskCompletion(id: string) {
        const newTasks = tasks.map(task => {
            if(task.id === id) {
                task.isDone = !task.isDone;
                return task
            } 
            return task
        })
        setTasks(newTasks)
    }

    function countTasksDone() {
        return tasks.reduce((accumulator, task) => {
            if(task.isDone) {
                return accumulator + 1
            } else {
                return accumulator
            }
        }, 0)
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
                            <strong>{tasks.length}</strong>
                        </div>
                    </div>
                    <div>
                        <strong className={style.done}>Concluídas</strong>
                        <div className={style.infoCircle}>
                            <strong>{`${countTasksDone()} de ${tasks.length}`}</strong>
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
                            <TaskItem 
                                key={task.id} 
                                id={task.id} 
                                description={task.description} 
                                isDone={task.isDone}
                                onDeleteComment={deleteComment}
                                onToggleTaskCompletion={toggleTaskCompletion}
                            />
                        )
                    })
                }
                
            </main>
        </section>
    )
}