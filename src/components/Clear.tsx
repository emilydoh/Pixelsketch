interface ClearProps {
    handleClearClick : () => void;
}

export const Clear : React.FC<ClearProps> = ( { handleClearClick } ) => {
    return(
        <div>
            <button onClick={handleClearClick}>CLEAR</button>
        </div>
    );
}