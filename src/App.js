import { Typography } from "@mui/material";
import { fontFamily, fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";


const getRandomColor = () => {
  let hexaList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  let randomcolor = '#';

  for (let i = 0; i < 6; i++) {
    let char = hexaList[Math.floor(Math.random() * hexaList.length)]
    randomcolor = randomcolor + char
  }
  return randomcolor
}

function App() {

  const [color, setColor] = useState('')
  const [buttonColors, setButtonColors] = useState ([]);
  const [result, setResult] = useState(undefined)

  const generateColors = () => {
    let correctColor = getRandomColor()
    setColor(correctColor)
    let colorList = shuffleColors([correctColor, getRandomColor(), getRandomColor()])
    setButtonColors(colorList)
  }

  useEffect(() => {
    generateColors()
  }, [])



  const shuffleColors = (list) => {
   let shuffledList = list.sort((a,b) => 0.5 - Math.random())
   return shuffledList
  }
  const handleAnswerClick = (answer) => {
    if (answer === color) {
      setResult(false)
      generateColors()
    } else {
      setResult(true)
    }
  }

  return (
    <div className="App">
      <column>
      <div style={{justifyContent:'center', alignItems:'center'}}>{ 
      result===true &&
      <Typography align="center" sx={{fontSize:30, color:'red'}}>
          Wrong, try again
        </Typography>}
      {result===false &&
        <Typography align="center" sx={{fontSize:30, color:'green'}}>
          Correct! What about this one?
        </Typography>
        }
        </div>
      <ColorBox color={color} />
      {buttonColors.map(col => (
        <Button key={col} text={col} onClick={() => handleAnswerClick(col)} /> 
      ))} 
      </column>
    </div>
  );
  
}

export default App;
