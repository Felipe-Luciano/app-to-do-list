import {useState, useEffect} from 'react'
import style from './TaskList.module.css'
import {PlusCircle} from 'phosphor-react'

import clipBoardImg from '../assets/Clipboard.png'
import { TaskItem } from './TaskItem';

interface Task {
    id: number; 
    description: string;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])

    
    useEffect(() => {
        setTasks([
            {id: 1, description: "teste teste"},
            {id: 2, description: "Taks escrita nessa parte da jason sussu f1 de porsche falr vim da porsche falr vim d porsche falr vim d"},
            {id: 3, description: "Taks escrita nessa parte da jason  vim da favela vou ta sozinho teste teste teste"},
            {id: 4, description: "Taks escrita nessa parte da jason sussu f1 de porsche falr vim da porsche falr vim d porsche falr vim d"},
        ])
    }, [])
    
    return(
        <section className={style.taskSection}>
            <form className={style.taskForm}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button type="submit">Criar <PlusCircle color='var(--gray-100)' size={16}/></button>
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