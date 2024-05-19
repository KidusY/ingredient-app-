import React from 'react';
import './App.css';
import { Button } from './components/button/button';

const App = () => {
  let [count, setCount] = React.useState(0);

  const getChildData = (data: number) => {
    console.log(data); 
    setCount(data);
  }

  return (
    <div className="App">
      <h1>Ingredient App {count}</h1>
      <Button count={count} getChildData={getChildData}/>
    </div>
  );
};

export default App;
