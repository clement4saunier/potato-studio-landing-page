import styles from "./Page.module.css"

export default function Page({ children }) {
    return <div class={styles.page}>
        {children}
    </div>
}