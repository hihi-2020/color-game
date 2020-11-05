import React from 'react'
// import CorrectWithSound from './Correct'
// import InCorrectWithSound from './Incorrect'
import MainArea from './MainArea'




class App extends React.Component {
  // state={
  //   correct:false
  // }
  render () {
  return (
    <>
      <MainArea path='/' />
      {/* {this.state.correct == true && <InCorrectWithSound />}
      <button onClick= {() => {this.setState ({correct:true})}}>Click</button> */}
    </>



  )
  }
}

export default App



