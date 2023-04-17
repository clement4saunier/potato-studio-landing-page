import styles from "./Page.module.css"

export default function Page({ children, header }) {
    return <div class={styles.container}>
        <div class={styles.page}>
            {header}
            {children}
        </div>
    </div>
}