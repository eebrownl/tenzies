
import './App.css';
import Dice from './components/Dice'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = React.useState(() => allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
    
    
    React.useEffect(function diceStateChanged() {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
          setTenzies(true)
        }
    }, [dice])

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
    if(!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld === true ? 
        die :
        {...die, value: (Math.floor(Math.random() * 6) + 1)}
      }))
    }else {
      setTenzies(false)
      setDice(allNewDice())
    }
  } 


  return (
    <main className='app'>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-holder'>
        {diceElements}
      </div>
      <button onClick={rollDice}className='roll-button'>{tenzies === true ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
