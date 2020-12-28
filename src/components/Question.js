import Li from '../styles/Li';
import Button from '../styles/Button';
//useDispatch permet d'envoyer une action dans le store
//useSelectore permet de lire le store
import { useDispatch,useSelector } from 'react-redux';

import { add_question, set_question } from "../actions/action-type";


const App = () => {
  //on recupere le gros objet state
  // const state = useSelector(state => state);

  //les cles du state
  const { count,questions,question,message } = useSelector((state) => {
    return {
      count: state.question.count,
      questions: state.question.questions,
      question: state.question.question,
      message: state.question.message
    };
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(add_question());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // action.payload = { name : name, value : value }
    dispatch(set_question({ name, value }));
  };

  
  return (
    <div className="App">
     
      <p>Hello: {count} questions</p>    
      <form onSubmit={handleSubmit}>
        <p>{message}</p>
          <p>Saisir la question: 
            <span> <input type="text"  name='question' value ={question} onChange={handleChange}/></span> 
      </p>  
      <p><Button primary>Add question</Button></p> 
      </form>  
      { questions.length > 0 && (
              <ul>
                {questions.map((question, i) => <Li key={i} >Question n° {i} : <span>{question}</span></Li>)}
              </ul>
          )} 
    </div>
  );
}

export default App;
