import React from "react";

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
            console.log("Success")
        } else {
            console.log("Failure")
        }
    }

    // let answerInput = document.getElementsByClassName("answerInput")
    // answerInput.addEventListener("keydown", function (e) {
    //     if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    //         validate(e);
    //     }
    // });
  
  render() {
    return (
      <div>
        <p type="text" className="wordInput" style={this.state.style}>{this.state.word}</p>
        <input type="text" className="answerInput" onKeyPress={this.handleKeyPress}></input>
        <br></br>
        <br></br>
        <button onClick={this.generateColour}>Go Again?</button>

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
