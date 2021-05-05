import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm";
import AppContext from "../contexts/AppContext";
import reducer from '../reducers';
import Events from './Events';

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // stateは配列を渡す。
  // dispatchは、関数と言うデータを渡す。状態(state)を変える手段。

  return (
    /* プロバイダーからvalueを渡す。*/
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fruid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;