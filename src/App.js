// import './App.css';
import styled from 'styled-components';
//useDispatch permet d'envoyer une action dans le store
//useSelectore permet de lire le store
import { useDispatch,useSelector } from 'react-redux';

import { set_dragon,add_dragon,reverse_dragons,del_dragon } from "./actions/action-type";


const App = () => {
 
  const {number,dragons,dragon,text} = useSelector(state => state);
  
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

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: ${props => props.primary ? " 1em" : "0.8em"};
    margin: 1em;
    padding:${props => props.primary ? " 0.25em 1em" : "0em 0.2em"};
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  const Li =styled.li `
    color: cornflowerblue;
    list-style: none;
    `;
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
  