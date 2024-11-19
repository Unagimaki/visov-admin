import { useEffect } from 'react';
import './App.css';
import { database } from './config/firebase';
import { actionSetWords } from './state/reducers/wordsReducer/wordsReducer';
import { convertObjectToArray } from './helpers/convertObjectToArray';
import { countScientists } from './helpers/countScientists';
import { actionSetAnswers } from './state/reducers/answerReducer/actions';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { AnswerContainer } from './components/AnswerContainer/AnswerContainer';
import { PanelContainer } from './components/Panel/PanelContainer';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const answersRef = ref(database, 'answers');
    onValue(answersRef, (snapshot) => {
      const data = snapshot.val();          
      dispatch(actionSetAnswers(convertObjectToArray(data)))
    })
  }, [])

  return (
    <div className="App">
      <PanelContainer/>
      <AnswerContainer/>
    </div>
  );
}

export default App;
