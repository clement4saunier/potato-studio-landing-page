import styles from "./Page.module.css"

export default function Page({ children, header }) {
    return <div class={styles.container}>
        {header}
        <div class={styles.page}>
            {children}
        </div>
    </div>
}