import logo from "./logo.svg";
import styles from "./logo.module.scss";


export function Logo() {
    return <a href="#" className={styles.container}>
        <img src={logo} className={styles.image} />
        <span className={styles.text}>react</span>
    </a>
}