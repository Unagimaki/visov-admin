import { useSelector } from 'react-redux'
import styles from './AnswerContainer.module.scss'
import { AnswerItem } from './components/AnswerItem/AnswerItem';
import { AnswerHeader } from './components/AnswerHeader/AnswerHeader';

export const AnswerContainer = () => {
    const answers = useSelector(state => state.answers)    
    console.log(answers);
    
    return(
        <div className={styles.container}>
            <AnswerHeader/>
            {
                answers.map((item, index) => {
                    return <AnswerItem
                        email={item.email}
                        fullname={item.fullName}
                        organization={item.organization}
                        scientist={item.scientist}
                        tgId={item.id}
                        tgUsername={item.tgUsername}
                        key={index}
                    />
                })
            }
        </div>
    )
}