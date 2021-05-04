import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm";
import AppContext from "../contexts/AppContext";
import reducer from '../reducers';
import Events from './Events';

console.log({AppContext});

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // stateは配列を渡す。
  // dispatchは、関数と言うデータを渡す。状態(state)を変える手段。

  return (
    /* プロバイダーからvalueを渡す。*/
    <AppContext.Provider value={'hello, I am a provider'}>
      <div className="container-fruid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;