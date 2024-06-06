interface ClearProps {
    handleClearClick : () => void;
}

export const Clear : React.FC<ClearProps> = ( { handleClearClick } ) => {
    return(
        <button onClick={handleClearClick}>CLEAR</button>
    );
}