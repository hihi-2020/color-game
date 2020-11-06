import React from "react";

import {getAnswer, getWord} from '../GameFunctions'
import {getStyle} from '../GameFunctions'
import {getPair} from '../GameFunctions'

class MainArea extends React.Component {
    state = {
        word: '',
        style: {
        color: 'blue'
        }
    }

    componentDidMount() {
        this.generateColour()
        // this.getStyle()
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
        console.log(word)
        console.log("style: " + style)
    }
  
  render() {
    return (
      <div>
        <p type="text" className="wordInput" style={this.state.style}>{this.state.word}</p>
        <button onClick={this.generateColour}>Go Again?</button>

        {/* <input type="text" className="answerInput"></input> */}
      </div>
    );
  }
}

// state = {
//     style: {
//         color: this.styleColor
//     }

// }


export default MainArea;
