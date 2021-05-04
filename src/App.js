import React, { useState } from 'react';

function App() {

  const initialStates = {
    name: '',
    price: 1000
  };

  const [name, setName] = useState(initialStates.name);
  const [price, setPrice] = useState(initialStates.price);

  function reset() {
    setPrice(initialStates.price);
    setName(initialStates.name);
  }

  return (
    <div>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={()=>setPrice(price+1)}>+1</button>
      <button onClick={()=>setPrice(price-1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;