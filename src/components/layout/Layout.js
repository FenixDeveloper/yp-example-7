import styles from "./layout.module.scss";

export function Layout({header, sidebar, footer, children}) {
    return <div className={styles.container}>
        {header}
        {sidebar 
        ? <div className={styles.wrapper}>
            {sidebar}
            <main className={styles.main}>{children}</main>  
          </div> 
        : <main className={styles.main}>{children}</main> }
        
        {footer}
    </div>
}