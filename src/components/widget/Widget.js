import styles from "./widget.module.scss";
import cx from "classnames";

export const SIZE_1 = styles.size_1;
export const SIZE_2 = styles.size_2;
export const SIZE_3 = styles.size_3;
export const SIZE_4 = styles.size_4;

export function Widget({title, className, children}) {
    return <section className={cx(styles.container, className)}>
        <h2>{title}</h2>
        <div className={styles.wrapper}>
            {children}
        </div>
    </section>
}