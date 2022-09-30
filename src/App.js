
import './App.css';
import Dice from './components/Dice'
import React from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  const diceElements = dice.map(die => {
    return <Dice value={die.value} isHeld={die.isHeld} key={die.id}
    />
  })
  console.log(dice)

  function allNewDice() {
    let diceArray=[]
    let diceObj={}
    for (let i = 0; i < 10; i++) {
        let randomNum = (Math.floor(Math.random() * 6) + 1);
        diceObj = {value: randomNum, isHeld: false, id: nanoid()}
        diceArray.push(diceObj)
    } return diceArray;
    
  }

  function rollDice() {
    setDice(allNewDice())
  } 

  return (
    <main className='app'>
      <div className='dice-holder'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll-button'>Roll</button>
    </main>
  );
}

export default App;
