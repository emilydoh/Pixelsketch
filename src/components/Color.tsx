interface ColorProps {
    currentlySelectedColor : string
    handleSelectedColorChange : ( newColor : string ) => void;
}

export const Color : React.FC<ColorProps> = ( {handleSelectedColorChange, currentlySelectedColor} ) => {
    return (
        <>
            <div className="sidebarTextItemContainer">
                <p>COLOR:</p>
            </div>
            <input className='colorPicker' type='color' value={currentlySelectedColor} onChange = { (e) => handleSelectedColorChange(e.target.value) }></input>
        </>
    );
}