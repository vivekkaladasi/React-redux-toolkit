
import { useDispatch, useSelector , useState } from 'react-redux';
import './App.css';
import { decrement, increment , reset } from './redux/features/counter/counterSlice';

function App() {

  const  [amount , setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){
    dispatch(decrement());

  }

  function handleResetClick(){
    dispatch(reset());

  }


  return (
   <div className='container'>
   <button onClick={handleIncrementClick}> +</button>
   <p>count: {count}</p>
   <button onClick={handleDecrementClick}> - </button>
   <br></br>
   <br></br>
   <button onClick={handleResetClick}> Reset </button>

    <input type='number' value = {amount} placeholder='enter amount' onChange={(e) => setAmount(e.target.value)}/>

   </div>
  );
}

export default App;
