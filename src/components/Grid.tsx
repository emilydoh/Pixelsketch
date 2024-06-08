import { useState } from "react"
import { Pixel } from './Pixel.tsx'
import Toolbar from "./Toolbar.tsx";

function Grid() {
  // default measurements for our square grid is 15 x 15
  const DEFAULT_SIZE = 225;
  const DEFAULT_BACKGROUND_COLOR = 'white'
  const DEFAULT_COLOR = '#F58616'

  const [gridSize, setGridSize] = useState(DEFAULT_SIZE);
  // colors contains state of the pixels on the board (color and index)
  const [colors, setColors] = useState<boxInfo[]>(makeInitialColorsGrid);
  const [currentlySelectedColor, setCurrentlySelectedColor] = useState(DEFAULT_COLOR);

  interface boxInfo {
    color: string;
    index: number;
  };


  function makeInitialColorsGrid() : boxInfo[] {
    const newGrid = Array.from({ length: gridSize }, (_, i) => ({
      color: DEFAULT_BACKGROUND_COLOR,
      index: i,
    }));
    return newGrid;
  }

  function changePixelColor(selectedIndex : number) {
    setColors((colors) => { 
      const newColors = colors.map((box) => {
          if (box.index == selectedIndex ) {
            return {...box, color: currentlySelectedColor};
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
      color: DEFAULT_BACKGROUND_COLOR,
      index: i,
    }));
    setColors(newGrid);
  }

  function handleSelectedColorChange( newColor : string) {
    setCurrentlySelectedColor(newColor);
  }

  return (
    <div className="gridContainer">
      <Toolbar handleCanvasSizeChange={handleNewGridSize} handleClearClick={() => resetGridSpecifiedSize(gridSize)} handleSelectedColorChange = {handleSelectedColorChange} currentlySelectedColor={currentlySelectedColor}></Toolbar>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${Math.sqrt(gridSize)}, 1fr)` }}>
        {
          colors.map((entry) => {
            return (
              <Pixel key = {`${entry.index}`} color= {entry.color} index = {entry.index} handleColorChange={() => changePixelColor(entry.index)}></Pixel>
            );
          })
        }
      </div>
    </div>
  )
}

export default Grid