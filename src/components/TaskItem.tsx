import style from './TaskItem.module.css'
import {Trash , Circle} from 'phosphor-react'

interface TaskItemProps {
    id: string
    description: string;
    onDeleteComment: (id: string) => void;
}

export function TaskItem({id, description, onDeleteComment}: TaskItemProps) {

    function handleDeleteComment() {
        onDeleteComment(id)
    }

    return (
        <article className={style.task}>
            <div className={style.content}>
                <div className={style.checkBox}>
                    <Circle color='var(--blue-300)' size={24}/>
                </div>
                <p className={style.text}>{description}</p>
            </div>
            <div onClick={handleDeleteComment}  className={style.trashIconWrapper}>
                <Trash className={style.trashIcon}/> 
            </div>
        </article>
    )
}