import React, { useState } from 'react';

function App(props) {

  const [state, setState] = useState(props); // 状態をオブジェクトで持つこともできる。
  const { name, price } = state;

  function reset() {
    setState(props);
  }

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={()=>setState({...state, price: price+1})}>+1</button>
      <button onClick={()=>setState({...state, price: price-1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})} />
    </div>
  );
}

// 外部からの情報を使う場合。
App.defaultProps = {
  name: '',
  price: 1000
}

export default App;