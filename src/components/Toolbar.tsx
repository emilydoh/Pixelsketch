import CanvasSize from "./CanvasSize";
import Color from "./Color";
import {Clear} from "./Clear";

interface ToolbarProps {
    handleCanvasSizeChange : ( newSize : number ) => void;
    handleClearClick : () => void;
}

export const Toolbar : React.FC<ToolbarProps> = ( { handleCanvasSizeChange , handleClearClick} ) => {
    return (
    <div className = "toolbar">
        <h2>TOOLS</h2>
        <CanvasSize handleCanvasSizeChange = {handleCanvasSizeChange}></CanvasSize>
        {/*** to do : implement these features ***
         <Eraser></Eraser> */}
        <Clear handleClearClick={handleClearClick}></Clear> 
        <Color></Color>
        {/* <Save></Save> */}
    </div>
    );
}

export default Toolbar;