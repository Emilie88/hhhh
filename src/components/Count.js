import { useDispatch,useSelector } from 'react-redux';
import {increment } from "../actions/action-type";
import Button from '../styles/Button';

const App = () => {
    const { count} = useSelector((state) => {
      return {
        count: state.counter.count
      };
    });
    const dispatch = useDispatch();
    
  const handleChange= (e) => {
    const { value } = e.target;  
    setInterval(() => {
        dispatch(increment({  value }));
    }, 1000);
    
  };

  return (
    <div className="App">
        <p>{count}</p>
        <Button onClick={handleChange}> Increment</Button>
     </div>
  )
}
export default App;  