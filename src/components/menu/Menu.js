import styles from "./menu.module.scss";
import cx from "classnames";


function MenuItem({label, url, isActive, className, ...props}) {
    return <li 
        {...props}
        className={cx(styles.item, className, {
            [styles.isActive]: isActive
        })}
    >
        <a href={url || '#'}>{label}</a>
    </li>
}

export function Menu({items, className}) {
    return <ul className={cx(styles.container, className)}>
        {items 
            ? items.map((item, index) => <MenuItem 
                key={index} 
                {...item} 
            />) 
            : null}
    </ul>
}