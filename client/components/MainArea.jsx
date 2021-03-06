import React, { Component } from "react";
import Correct from './Correct'
import Incorrect from './Incorrect'

import {getAnswer, getWord} from '../GameFunctions'
import {getStyle} from '../GameFunctions'
import {getPair} from '../GameFunctions'
import {evaluateResult} from '../GameFunctions'

class MainArea extends React.Component {
    state = {
        word: '',
        style: {
        color: 'blue'
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
           this.answerInput()
        }
      }

    componentDidMount() {
        this.generateColour()
        
    }

    generateColour = () => {
        const pair = getPair()
        const answer = getAnswer()
        const word = getWord()
        const style = getStyle()
        this.setState({
            word: word,
            style: {
                ...this.state.style,
                color: style
            }          
        })
    }

// when enter pressed calls answer input
    // window.addEventListener('keypress', function (e) {
    //     if (e.keyCode == 13) {
    //         answerInput()
    //     }
    // }

// // when called determines if answerInput is correct or not and then does CORRECT or FAILURE
    answerInput = () => {
        const results = document.getElementsByClassName("answerInput")[0].value
        console.log(results)
        const answer = getAnswer()
        if (results == answer) {
           this.setState({
                isCorrect: true,
           })
           
            console.log("Success")

            
        } else {
            this.setState({
                isIncorrect: true
            })
            console.log("Failure")
        }
        setTimeout(()=>{
            window.location.reload()
        } ,1000)
        // this.generateColour()
    }



  
  render() {
    return (
      <div>
        <div>
            {this.state.isCorrect && <Correct />}
        </div> <div>
            {this.state.isIncorrect && <Incorrect />}
        </div>
        <p type="text" className="wordInput" style={this.state.style}>{this.state.word}</p>
        <input autoFocus={true} type="text" className="answerInput" onKeyPress={this.handleKeyPress}></input>
        <br></br>
        <br></br>
       
    

        {/* <input type="text" className="answerInput"></input> */}
      </div>
    )
  }
}

// state = {
//     style: {
//         color: this.styleColor
//     }

// }


export default MainArea;
