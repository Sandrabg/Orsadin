import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { 
  incrementCounter,
  decrementCounter,
} from '../../redux/actions/counterAction';

const CounterButtons = ( ) => {
  const counter = useSelector(state => state.counterState);
  const dispatch = useDispatch();

  return (
    <div>
        <div>Counter:{counter}</div>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
        <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
}

export default CounterButtons;