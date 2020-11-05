import React from 'react'
import MainArea from './MainArea'

const App = () => {
  return (
    <>

    <input className="question"></input>
    <input className="answer"></input>
    <button className="userAnswer"></button>
    
    <h1>React development has begun!</h1>
    <Route MainArea path='/' />

    </>
  )
}

export default App


function randomColor(){

  Math.floor(Math.random() * colorArray.length)
}

function setColor(){

}

//define userAnswer
var userAnswer = document.getElementsByClassName("userAnswer") //.value?

// enter key listener
userAnswer.addEventListener("keydown", function (e) {
  if (e.keyCode === 13){
    validate(e)
  }
})

// validate if userAnswer is correct (?)
function validate(e){
  var text = e.target.value
}


//on page load or playAgain button (or after 2 seconds after answer or something)
 (evt) => {
  this.setState({
    style: {
      ...this.state.style,
      color: this.randomColor()
    }
  })

 }

 state = {
   style: {
     
   }
 }