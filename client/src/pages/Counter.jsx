import React, {useContext} from 'react';
import Store from '../context/GlobalContext';

function Counter() {
  const { state, dispatch } = useContext(Store);
  const value = 5
  const user = {
    name: 'Alp Eren',
    userId: 10,
    phone: '5422573278'
  }
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>{state.user.name ? state.user.name : 'Boş'}</p>
      <p>{state.user.userId}</p>
      <p>{state.user.phone ? state.user.phone : 'Boş'}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({type: 'setUser', user})}>
        Decrement
      </button>
      <button onClick={() => dispatch({type: 'setCustom', value})}>
        Set 5
      </button>
    </div>
  );
}

export default Counter;
