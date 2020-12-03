import './App.css';
import styled from 'styled-components';
//useDispatch permet d'envoyer une action dans le store
//useSelectore permet de lire le store
import { useDispatch,useSelector } from 'react-redux';

import { add_question, set_question } from "./actions/action-type";

const App = () => {
  //on recupere le gros objet state
  // const state = useSelector(state => state);

  //les cles du state
  const {count,questions,question,message} = useSelector(state => state);
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
const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  const Li =styled.li `
    color: cornflowerblue;
    list-style: none;
    `;



  
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
