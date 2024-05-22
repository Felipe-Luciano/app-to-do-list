import logo from '../assets/Logo.png'
import style from './Header.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <img 
                className={style.logo} 
                src={logo} 
                alt="A logo featuring a blue rocket ship to the left of the word todo in blue and purple."
            />
        </header>
    )
}