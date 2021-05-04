import React, { useEffect, useState } from 'react';

function App(props) {

  const [state, setState] = useState(props); // 状態をオブジェクトで持つこともできる。
  const { name, price } = state;

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate');
  });

  // useEffectは、何個も書いて良い。
  useEffect(() => {
    console.log('This is like componentDidMount');
    // 第二引数に空の配列を渡すと、最初の一回だけ実行する。
  }, []);

  useEffect(() => {
    console.log('this callback is for name only');
    // 第二引数に着目したい要素を入れる。ここではname。
  }, [name]);

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