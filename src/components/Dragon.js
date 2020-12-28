// import './App.css';
import styled from 'styled-components';
import Li from '../styles/Li';
import Button from '../styles/Button';
//useDispatch permet d'envoyer une action dans le store
//useSelectore permet de lire le store
import { useDispatch,useSelector } from 'react-redux';

import { set_dragon,add_dragon,reverse_dragons,del_dragon } from "../actions/action-type";


const App = () => {
  const { number, dragon, dragons, text } = useSelector((state) => {
    return {
      number: state.dragon.number,
      dragon: state.dragon.dragon,
      dragons: state.dragon.dragons,
      text: state.dragon.text
    };
  });
 
  
  
  const dispatch = useDispatch();

  const handleChangeDragon= (e) => {
    const { name, value } = e.target;  
    dispatch(set_dragon({ name, value }));
  };
  const handleSubmitDragon = (e) => {
    e.preventDefault();

    dispatch(add_dragon());
  };

  const handleDelete = (dragon) => {
    dispatch(del_dragon({dragon}));
   
  };

  const handleReverse =()=>{
    dispatch(reverse_dragons());
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
         <h2>{number} nom/s de dragons</h2>    
        <Wrapper>
          <Div>
            <Button onClick={handleReverse}>Reverse Order</Button>
          <form onSubmit={handleSubmitDragon}>
            <p>{text}</p>
              <p>Saisir un nom de dragon: 
                <span> <input type="text"  name='dragon' value ={dragon} onChange={handleChangeDragon}/></span> 
          </p>  
          <p><Button primary>Add dragon</Button></p> 
          </form>  
          </Div>
          <DivTwo>
            { dragons.length > 0 && (
                    <ul>
                      {dragons.map((dragon, i) => <Li key={i} >{dragon}  
                        <Button  onClick={()=>handleDelete(dragon)}>
                            Delete
                        </Button></Li>)}
                    </ul>
              )} 
            </DivTwo>
          </Wrapper>
      </div>
    );
  }
  
  export default App;
  