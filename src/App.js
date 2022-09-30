
import './App.css';
import Dice from './components/Dice'
import React from 'react'

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  const diceElements = dice.map(die => {
    return <Dice value={die}
    />
  })
  
  function allNewDice() {
    let diceArray=[]
    for (let i = 0; i < 10; i++) {
        diceArray.push(Math.floor(Math.random() * 6) + 1);
    }
    return diceArray
  }

  return (
    <main className='app'>
      <div className='dice-holder'>
        {diceElements}
      </div>
    </main>
  );
}

export default App;
