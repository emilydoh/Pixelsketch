import CanvasSize from "./CanvasSize";
import {Color} from "./Color";
import {Clear} from "./Clear";
import { Eraser } from "./Eraser"; 

interface ToolbarProps {
    handleCanvasSizeChange : ( newSize : number ) => void;
    handleClearClick : () => void;
    handleSelectedColorChange : ( newColor : string ) => void;
    currentlySelectedColor : string
}

export const Toolbar : React.FC<ToolbarProps> = ( { handleCanvasSizeChange , handleClearClick, handleSelectedColorChange, currentlySelectedColor } ) => {
    return (
    <div className = "toolbar">
        <h2>TOOLS</h2>
        <CanvasSize handleCanvasSizeChange = {handleCanvasSizeChange}></CanvasSize>
        <Eraser handleEraserClick = {() => handleSelectedColorChange('#FFFFFF')}></Eraser>
        <Clear handleClearClick={handleClearClick}></Clear> 
        <Color handleSelectedColorChange = {handleSelectedColorChange} currentlySelectedColor={currentlySelectedColor}></Color>
        {/*/*** to do : implement these features ***
         <Save></Save> */}
    </div>
    );
}

export default Toolbar;