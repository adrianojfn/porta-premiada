import styles from '../styles/Presente.module.css' // Importa o arquivo CSS específico para este componente

export default function Presente() {
    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.corpo}></div>
            <div className={styles.laco1}></div>
            <div className={styles.laco2}></div>
        </div>
    )
}