import { useState, useEffect } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

function App() {

  const [color, setColor] = useState('')
  const [buttonColors, setButtonColors] = useState ([]);
  const [correct, setCorrect] = useState(false)


  useEffect(() => {
    let correctColor = getRandomColor()
    setColor(correctColor)
    let colorList = shuffleColors([correctColor, getRandomColor(), getRandomColor()])
    setButtonColors(colorList)
  }, [])

  const getRandomColor = () => {
    let hexaList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let randomcolor = '#';

    for (let i = 0; i < 6; i++) {
      let char = hexaList[Math.floor(Math.random() * hexaList.length)]
      randomcolor = randomcolor + char
    }
    return randomcolor
  }

  const shuffleColors = (list) => {
   let shuffledList = list.sort((a,b) => 0.5 - Math.random())
   return shuffledList
  }
  const handleAnswerClick = (answer) => {
    if (answer === color) {
      setCorrect(true)
      console.log("Correct!")
    } else {
      setCorrect(false)
      console.log("WRONG")
    }
  }

  return (
    <div className="App">
      <column>

      <ColorBox color={color} />
      {buttonColors.map(col => (
        <Button key={col} text={col} onClick={() => handleAnswerClick(col)} /> 
      ))} 
      </column>
    </div>
  );
  
}

export default App;
