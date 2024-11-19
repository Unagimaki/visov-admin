import { useSelector } from 'react-redux'
import styles from './panelContainer.module.scss'

export const PanelContainer = () => {
    const answers = useSelector(state => state.answers)

    return(
        <div className={styles.container}>
            <div>Количество ответов: {answers.length}</div>
        </div>
    )
}