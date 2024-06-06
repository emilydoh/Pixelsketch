import { useState } from "react"
import { Pixel } from './Pixel.tsx'
import Toolbar from "./Toolbar.tsx";

function Grid() {
  // default measurements for our square grid is 15 x 15
  const DEFAULT_SIZE = 225;
  const DEFAULT_COLOR = 'white'

  const [gridSize, setGridSize] = useState(DEFAULT_SIZE);
  // colors contains state of the pixels on the board (color and index)
  const [colors, setColors] = useState<boxInfo[]>(makeInitialColorsGrid);
  // *** to do: implement logic for changing color *** 
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState('white');

  interface boxInfo {
    color: string;
    index: number;
  };


  function makeInitialColorsGrid() : boxInfo[] {
    const newGrid = Array.from({ length: gridSize }, (_, i) => ({
      color: DEFAULT_COLOR,
      index: i,
    }));
    return newGrid;
  }

  function changeColor(selectedIndex : number) {
    setColors((colors) => { 
      const newColors = colors.map((box) => {
          if (box.index == selectedIndex ) {
            return {...box, color:'#76ABAE'};
          }
          else {
            return {...box};
          }
        }
      )
      return newColors;
    })
  }

  // set updated grid size and make new grid with cleared state
  function handleNewGridSize( newSize : number) {
    setGridSize(newSize);
    resetGridSpecifiedSize(newSize);
  }

  // clears the grid to white
  function resetGridSpecifiedSize(newSize : number) {
    const newGrid = Array.from({ length: newSize }, (_, i) => ({
      color: DEFAULT_COLOR,
      index: i,
    }));
    setColors(newGrid);
  }

  return (
    <div className="gridContainer">
      <Toolbar handleCanvasSizeChange={handleNewGridSize} handleClearClick={() => resetGridSpecifiedSize(gridSize)}></Toolbar>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${Math.sqrt(gridSize)}, 1fr)` }}>
        {
          colors.map((entry) => {
            return (
              <Pixel key = {`${entry.index}`} color= {entry.color} index = {entry.index} handleColorChange={() => changeColor(entry.index)}></Pixel>
            );
          })
        }
      </div>
    </div>
  )
}

export default Grid