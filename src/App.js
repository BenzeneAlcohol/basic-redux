import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index'
function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch(); 
  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={()=>{
        dispatch(increment());
      }}>+</button>
      <button onClick={()=>{
        dispatch(decrement());
      }}>-</button>
      <h1>isLogged = {isLogged? <h3>Hello</h3>:<h3>Bello</h3>}</h1>
    </div>
  );
}

export default App;
