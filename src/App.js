
import './App.css';
import Dice from './components/Dice'
import React from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(() => allNewDice())

  const diceElements = dice.map(die => {
    return <Dice value={die.value} isHeld={die.isHeld} key={die.id} holdDice={() => holdDice(die.id)} id={die.id}
    />
  })
  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}
  

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
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld === true ? 
      die :
      {...die, value: (Math.floor(Math.random() * 6) + 1)}
    }))
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
