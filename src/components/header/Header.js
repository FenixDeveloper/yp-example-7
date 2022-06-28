import styles from "./header.module.scss";

export function Header({items}) {
    return <header className={styles.container}>
        {items}
    </header>;
}