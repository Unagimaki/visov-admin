import styles from './answerHeader.module.scss'

export const AnswerHeader = () => {
    return(
        <div className={styles.container}>
            <div>E-mail</div>
            <div>Имя и фамилия</div>
            <div>organization</div>
            <div>Ответ</div>
            <div>tgId</div>
            <div>tgUsername</div>
            <div>Дата и время</div>
        </div>
    )
}
