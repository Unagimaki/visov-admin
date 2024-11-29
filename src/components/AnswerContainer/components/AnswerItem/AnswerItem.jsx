import { ref, set, update } from 'firebase/database';
import { database } from '../../../../config/firebase';
import styles from './answerItem.module.scss'
import { useDispatch } from 'react-redux';
import { actionChangeAnswer, actionRemoveAnswer } from '../../../../state/reducers/answerReducer/actions';
import { remove } from "firebase/database";

export const AnswerItem = ({email, fullname, organization, scientist, tgId = 'Нет', username = 'Нет', date = 'Нет'}) => {
    const dispatch = useDispatch()


    const writeData = async (tgId) => {
        try {
            await remove(ref(database, `/answers/${tgId}/scientist`))
            .then(() => dispatch(actionRemoveAnswer(tgId)))
        } catch (error) {
            console.error("Ошибка удаления данных:", error);
        }
    }
    const updateData = async (tgId, data) => {        
    try {
        await set(ref(database, `/answers/${tgId}/scientist`), data)

        .then(() => {
            dispatch(actionChangeAnswer(tgId, data))
        });
    } catch (error) {
        console.error("Ошибка обновления данных:", error);
    }
};
    const changeAnswer = () => {
        const answer = prompt('', 'Ваш текст')        
        answer && answer.trim() && updateData(tgId, answer)
    }

    return(
        <div className={styles.container}>
            <div>{email}</div>
            <div>{fullname}</div>
            <div>{organization}</div>
            <div className={styles.container_item} onClick={changeAnswer}>{scientist}</div>
            <div>{tgId}</div>
            <div>{username}</div>
            <div>{date}</div>
            <button onClick={() => writeData(tgId)}>
                &times;
            </button>
        </div>
    )
}
