import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// problem is in UI updation
// change propagation through useState
// automatically analyses DOM to update the variable
// syncing of UI and state

function App() {
  // let count = 5;

  let [count, setCount] = useState(5)

  let [clickCount, setClickCount] = useState(0)

  let initial_title = 'Fun with counter'

  let [title, setTitle] = useState(initial_title)
  let [newTitle, setNewTitle] = useState(initial_title)

  const incValue = () => {
    // count+=1
    // console.log('clicked', count)
    if(count<=20){
      count++;
      setCount(count)
    }
    setClickCount(clickCount+1)
    if(count==21){
      setCount(20)
      alert('count can\'t be increased more...')
    }
  }

  const decValue = (min) => {
    if(count>min) setCount(count-1)
    setClickCount(clickCount+1)
    if(count==min) alert('count can\'t be decreased more...')
  }

  const resetTitle = () => {
    document.querySelector('input').value = ''
  }

  const reset = () => {
    setCount(5)
    setClickCount(0)
    setTitle(initial_title)
    resetTitle()
  }

  const changeTitle = (event) => {
    if(event.target.value===''){
      setNewTitle(initial_title)
    }
    else{
      setNewTitle(event.target.value)
    }
  }

  const clickHandler = () => {
    setTitle(newTitle)
  }

  // const min = 0

  return (
    <>
      <h1>Code, eat and sleep...</h1>
      <h2>{title}</h2>
      <input type="text" onChange={changeTitle}/>&nbsp;&nbsp;
      <button onClick={clickHandler}>-Change title-</button>
      <h2>Counter value : {count}</h2>
      <br/>
      <button onClick={incValue}>Increase value</button> 
      &nbsp; &nbsp; &nbsp; 
      <button onClick={
          () => {decValue(0)}
      }>Decrease value</button>

      {/* <button onClick={
          () => {
              if(count>0) setCount(count-1)
              setClickCount(clickCount+1)
              if(count==0) alert('count can\'t be decreased more...')
          }
      }>Decrease value</button>    */}
      
      <br/><br/>
      <p>Maximum value can be 20 and minimum can be 0</p>
      <br/>
      <br/>
      <h3>Number of clicks : {clickCount}</h3>
      <br /><br />
      <button onClick={reset}>Reset</button>
      <br/><br/>
    </>
  )
}

export default App 
