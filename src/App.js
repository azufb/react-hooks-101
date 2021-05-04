import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0); // 配列を返す。2つの要素を返す。変数と関数(setほにゃらら)。

  // 足し算
  function increment() {
    setCount(count+1);
  }

  function increment2() {
    setCount(previousCount => previousCount+1)
  }

  // 引き算
  function decrement() {
    setCount(count-1);
  }

  // 2倍
  function double() {
    setCount(count*2);
  }

  // resetで、初期値に戻す
  function reset() {
    setCount(0);
  }

  // 3の倍数のときだけで3で割る
  function divide3() {
    if (count%3 === 0) {
      setCount(count/3);
    }
  }

  return (
    <div>
      <div>count：{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={double}>×2</button>
      <div>
        <button onClick={increment2}>+1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={divide3}>3の倍数のときだけ3で割る</button>
      </div>
    </div>
  );
}

export default App;