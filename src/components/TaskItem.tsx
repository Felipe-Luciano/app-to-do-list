import {useState} from 'react'
import style from './TaskItem.module.css'
import {Trash , Circle, Check} from 'phosphor-react'

interface TaskItemProps {
    id: string
    description: string;
    isDone: boolean; 
    onDeleteComment: (id: string) => void;
    onToggleTaskCompletion: (id: string) => void;
}

export function TaskItem({id, description, isDone, onDeleteComment, onToggleTaskCompletion}: TaskItemProps) {

    const [isHover, setIsHover] = useState(false)

    function handleDeleteComment() {
        onDeleteComment(id)
    }

    function handleToggleTaskCompletion() {
        onToggleTaskCompletion(id)
    }

    function handleMouseOver() {
        setIsHover(true)
    }

    function handleMouseOut() {
        setIsHover(false)
    }

    return (
        <article className={style.task}>
            <div className={style.content}>
                <div 
                    className={style.checkBox}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={handleToggleTaskCompletion}
                >
                    {
                        isDone ? 
                            <div className={style.doneCheckCircle}>
                                <Check size={16} color='var(--gray-100)' weight='bold' />
                            </div> 
                        :
                            <Circle color='var(--blue-300)' size={24} weight={isHover ? 'duotone' : 'light'} />
                    }
                </div>
                <p className={`${style.text} ${isDone ? style.doneText : ""}`}>{description}</p>
            </div>
            <div onClick={handleDeleteComment}  className={style.trashIconWrapper}>
                <Trash className={style.trashIcon}/> 
            </div>
        </article>
    )
}