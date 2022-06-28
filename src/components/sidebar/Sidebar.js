import styles from "./sidebar.module.scss";
import { Menu } from "../menu/Menu";

export function Sidebar() {
    return <aside className={styles.container}>
      <Menu items={[
        { label: "Page 4", url: "/page4" },
        { label: "Page 5", url: "/page5", isActive: true },
        { label: "Page 6", url: "/page6" }
      ]} className={styles.menu} />
    </aside>;
  }