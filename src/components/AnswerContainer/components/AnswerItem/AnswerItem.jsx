import { ref } from 'firebase/database';
import { database } from '../../../../config/firebase';
import styles from './answerItem.module.scss'
import { useDispatch } from 'react-redux';
import { actionRemoveAnswer } from '../../../../state/reducers/answerReducer/actions';
import { remove } from "firebase/database";

export const AnswerItem = ({email, fullname, organization, scientist, tgId = 'Отсутствует', tgUsername = 'Отсутствует'}) => {
    const dispatch = useDispatch()


const writeData = async (tgId) => {
    try {
        // Удаляем данные по указанному пути
        await remove(ref(database, `/answers/${tgId}/scientist`))
        .then(() => dispatch(actionRemoveAnswer(tgId)))
    } catch (error) {
        console.error("Ошибка удаления данных:", error);
    }
};

    const removeName = (tgId) => {        
        dispatch(actionRemoveAnswer(tgId))
    }

    return(
        <div className={styles.container}>
            <div>{email}</div>
            <div>{fullname}</div>
            <div>{organization}</div>
            <div>{scientist}</div>
            <div>{tgId}</div>
            <div>{tgUsername}</div>
            <button onClick={() => writeData(tgId)}>
                &times;
            </button>
        </div>
    )
}