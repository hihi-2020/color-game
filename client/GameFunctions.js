import colors from './components/colors'
    
//make an array of color pairs (array of arrays)
let allColorsArray =  Object.entries(colors)
let colorPair = ""
let answer = ""
let styleColor = ""
let word = ""

// randomly selects a color pair from the array of all colors
  export function getPair(){

    colorPair = allColorsArray[Math.floor(Math.random() * allColorsArray.length)]
    console.log("colorPair : " + colorPair)
    return colorPair
  }

  // accesses the color text string from the pair **THE ANSWER**
  export function getAnswer(){
    answer = colorPair[0]
    console.log("answer: " + answer)
    return answer
  }

  // accesses the color hex value from the pair **THE STYLING TO APPLY**
  export function getStyle(){
    styleColor = colorPair[1]
    console.log("styleColor: " + styleColor)
    return styleColor
  }


  // gets a new random pair and takes the string of text to use as the WORD that is STYLED by the ANSWER color
export function getWord(){
  word = allColorsArray[Math.floor(Math.random() * allColorsArray.length)][0]
  // console.log("word: " + word)
    return word
}

  // function evaluateResult(){
  //   if (document.getElementsByClassName(answerInput).value == answer {
      
  //   } 
  // }






// getPair()
// getAnswer()
// getStyle()
// getWord()

  // module.exports = {
  //   getPair,
  //   getAnswer,
  //   getStyle,
  //   getWord,
  //   }

  // export default GameFunctions