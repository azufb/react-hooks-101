import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from "./EventForm";
import AppContext from "../contexts/AppContext";
import reducer from '../reducers';
import Events from './Events';
import OperationLogs from "./OperationLogs";

const APP_KEY = 'appWithRedux';

const App = () => {
  // 読み込まれたときに最初に実行される場所はここ！
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  // 文字列で表示するわけにはいかないので、JSON.parse()で、元の表示形式に戻す。

  const [state, dispatch] = useReducer(reducer, initialState);
  // stateは配列を渡す。
  // dispatchは、関数と言うデータを渡す。状態(state)を変える手段。

  useEffect(() => {
    // stateが変化するたびに、ローカルストレージに保存したい。
    // ローカルストレージに保存できるのは、文字列のみ。
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]); // stateが変化すると、useEffectが実行される。

  return (
    /* プロバイダーからvalueを渡す。*/
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fruid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;