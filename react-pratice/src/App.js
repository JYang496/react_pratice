import './App.scss';
import {useState} from "react";


const squareArray = []

const Square = ({i}) =>{
    const [isMo, setMO] = useState(false)


    const color = `rgb(${i[0]}, ${i[1]}, ${i[2]})`;
    const bgColor = {
        background: color
    }
    const hoverColor = {
        background: 'black'
    }
    return(
        // isHovered is always false?
        <div className="square"
             onMouseEnter={() => setMO(true)}
             onMouseLeave={() => setMO(false)}
             style={isMo ? hoverColor : bgColor}>
        </div>
    )
}

const createArray = () => {
    let delta = 255/750

    for (let i = 0; i < 750; i++){
        let currentColor = [255,0,0]
        currentColor[0] = 255 - delta * (i+1)
        currentColor[1] = delta * (i+1)
        squareArray.push(currentColor)
    }
    for (let i = 0; i < 750; i++){
        let currentColor = [0,255,0]
        currentColor[1] = 255 - delta * (i+1)
        currentColor[2] = delta * (i+1)
        squareArray.push(currentColor)
    }
}


function App() {
    createArray()
  return (
      <div className="squareContainer">
          {squareArray.map((item, index) => <Square key={index} i={item}/>)}
      </div>
  );
}

export default App;
