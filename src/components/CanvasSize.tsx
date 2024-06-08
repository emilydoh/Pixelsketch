interface CanvasSizeProps {
    handleCanvasSizeChange : ( newSize : number ) => void;
  }

export const CanvasSize : React.FC<CanvasSizeProps> = ( {handleCanvasSizeChange} ) => {

    const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleCanvasSizeChange(Number(event.target.value));
    };

    return (
        <>
            <div className="sidebarTextItemContainer">
                <p>CANVAS SIZE:</p>
            </div>
            <select onChange={handleChange}>
                <option value = {225}>15 X 15</option>
                <option value = {100}>10 X 10</option>
                <option value = {400}>20 X 20</option>
                <option value = {625}>25 X 25</option>
            </select>
        </>
    );
}

export default CanvasSize;