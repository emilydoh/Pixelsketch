interface CanvasSizeProps {
    handleCanvasSizeChange : ( newSize : number ) => void;
  }

export const CanvasSize : React.FC<CanvasSizeProps> = ( {handleCanvasSizeChange} ) => {

    const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleCanvasSizeChange(Number(event.target.value));
    };

    return (
        <>
            <p>CANVAS SIZE:</p>
            <select onChange={handleChange}>
                <option value = {225}>15 X 15</option>
                <option value = {100}>10 X 10</option>
                <option value = {400}>20 X 20</option>
                <option value = {625}>25 X 25</option>
                <option value = {900}>30 X 30</option>
            </select>
        </>
    );
}

export default CanvasSize;