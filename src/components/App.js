import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm";
import reducer from '../reducers';
import Events from './Events'

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // stateは配列を渡す。
  // dispatchは、関数と言うデータを渡す。状態(state)を変える手段。

  return (
    <div className="container-fruid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;