interface EraserProps {
    handleEraserClick : () => void;
}

export const Eraser : React.FC<EraserProps> = ( {handleEraserClick} ) => {
    return (    
        <div>
            <button className='eraser' onClick={handleEraserClick}>ERASER</button>
        </div>    
    );
}