import style from './TaskSection.module.css'
import {PlusCircle} from 'phosphor-react'

import clipBoardImg from '../assets/Clipboard.png'

export function TaskSection() {
    return(
        <section className={style.taskSection}>
            <form className={style.taskForm}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button type="submit">Criar <PlusCircle color='#F2F2F2' size={16}/></button>
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
                <div className={style.emptyListContent}>
                    <img className={style.clipBoardImg} src={clipBoardImg} alt="A gray icon of a document with three lines, representing a list." />
                    <div className={style.textContent}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </main>
        </section>
    )
}