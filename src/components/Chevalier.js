// import './App.css';
import styled from 'styled-components';
import Li from '../styles/Li';
import Button from '../styles/Button';
//useDispatch permet d'envoyer une action dans le store
//useSelectore permet de lire le store
import { useDispatch,useSelector } from 'react-redux';

import { set_chevalier,add_chevalier,del_chevalier,reverse_chevalier} from "../actions/action-type";


const App = () => {
  const { count, chevalier, chevaliers, message } = useSelector((state) => {
    return {
      count: state.chevalier.count,
      chevalier: state.chevalier.chevalier,
      chevaliers: state.chevalier.chevaliers,
      message: state.chevalier.message
    };
  });
 
  
  
  const dispatch = useDispatch();

  const handleChangeChevalier= (e) => {
    const { name, value } = e.target;  
    dispatch(set_chevalier({ name, value }));
  };
  const handleSubmitChevalier = (e) => {
    e.preventDefault();

    dispatch(add_chevalier());
  };

  const handleDelete = (chevalier) => {
    dispatch(del_chevalier({chevalier}));
   
  };

  const handleReverse =()=>{
    dispatch(reverse_chevalier());
  }


    const Wrapper =  styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  `;
    const Div = styled.div`
    grid-column: 1 / 3;
    grid-row: 1;`;
    const DivTwo = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    `;

  
    return (
      <div className="App">
         <h2>{count} nom/s de chevaliers</h2>    
        <Wrapper>
          <Div>
          <Button onClick={handleReverse}>Reverse Order</Button>
          <form onSubmit={handleSubmitChevalier}>
            <p>{message}</p>
              <p>Saisir un chevalier: 
                <span> <input type="message"  name='chevalier' value ={chevalier} onChange={handleChangeChevalier}/></span> 
          </p>  
          <p><Button primary>Add chevalier</Button></p> 
          </form>  
          </Div>
          <DivTwo>
            { chevaliers.length > 0 && (
                    <ul>
                      {chevaliers.map((chevalier, i) => <Li key={i} >{chevalier}  
                        <Button  onClick={()=>handleDelete(chevalier)}>
                            Delete
                        </Button> 
                       </Li>)}
                    </ul>
              )} 
            </DivTwo>
          </Wrapper>
      </div>
    );
  }
  
  export default App;
  