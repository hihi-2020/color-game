

//make an array of color pairs (array of arrays)
let allColorsArray =  Object.entries(colorsObj)
let colorPair = ""
let answerArray = ""
let answer = ""
let style = ""

// randomly selects a color pair from the array of all colors
  function getPair(){

    colorPair = allColorsArray[Math.floor(Math.random() * allColorsArray.length)]

  }

  // accesses the color text string from the pair **THE ANSWER**
  function getAnswer(){
    answerArray = Object.keys(colorPair)
    answer = answerArray[0]
  }


  // accesses the color hex value from the pair **THE STYLING TO APPLY**
  function getStyle(){
    style = answerArray[1]
  }