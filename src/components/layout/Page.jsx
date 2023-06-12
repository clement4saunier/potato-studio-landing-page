import styles from "./Page.module.css"

export default function Page({ children, header }) {
    return <div class={styles.container}>
        <div class={styles.page}>
            <div class={styles.content}>
                {header}
                {children}
            </div>
        </div>
    </div>
}