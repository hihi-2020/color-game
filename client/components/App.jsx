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


    <Route path='/' component={MainArea} />
      </>
  )
  }
}

export default App



