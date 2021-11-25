import styles from "../styles/Porta.module.css" // Importa o arquivo CSS específico para este componente

export default function Porta(props) {
    // Variável que armazena se a porta está ou não selecionada para aplicar o estilo ou não
    const selecionada = props.selecionada ? styles.selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}