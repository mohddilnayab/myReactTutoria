import styles from './header.module.css'

function Header (){
    return (
        <div>
            <div className={styles.header}>this is header</div>
            <div className={styles.btn}>login</div>
        </div>
        
    )
}

export default Header