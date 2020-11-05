import React from 'react'
// import CorrectWithSound from './Correct'
// import InCorrectWithSound from './Incorrect'
import MainArea from './MainArea'
import {Route} from 'react-router-dom'




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


    <Route path='/' component={MainArea} />

  )
  }
}

export default App



