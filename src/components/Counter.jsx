import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
      case 'incremented_count': {
        return {
            ...state,
          count: parseInt(state.count,10)+parseInt(state.numberToChangeBy,10)
        };
      }
      case 'decremented_count': {
        return {
            ...state,
          count: parseInt(state.count,10)-parseInt(state.numberToChangeBy,10)
        };
      }
      case 'number_to_change_by': {
        return {
            ...state,
            numberToChangeBy: action.nextNumber,
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 , numberToChangeBy: 1});

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({ type: 'incremented_count' })}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({ type: 'decremented_count' })}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => dispatch({ type: 'number_to_change_by', nextNumber: e.target.value })} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;