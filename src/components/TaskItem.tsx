import style from './TaskItem.module.css'
import {Trash , Circle} from 'phosphor-react'

interface TaskItemProps {
    description: string
}

export function TaskItem({description}: TaskItemProps) {
    return (
        <article className={style.task}>
            <div className={style.content}>
                <div className={style.checkBox}>
                    <Circle color='var(--blue-300)' size={24}/>
                </div>
                <p className={style.text}>{description}</p>
            </div>
            <div className={style.trashIcon}>
                <Trash size={14} color='var(--gray-300)'/> 
            </div>
        </article>
    )
}