import React, { useState } from 'react'


const Boxscomponents = ({ addBox }) => {
    const [boxColor, setboxColor] = useState("");
    const [boxSize, setboxSize] = useState("");

    const createbox = (e) => {
        e.preventDefault(); //function
        const newBox = { boxColor, boxSize };
        addBox(newBox)
    }
    return (
        <form onSubmit={createbox}>

            <div>
                <label>Box Color:</label>
                <input type="text" name="boxColor"
                    onChange={(e) => setboxColor(e.target.value)}
                    value={boxColor}></input>
            </div>

            <div>
                <label>Box Size:</label>
                <input type="text" name="boxSize"
                    onChange={(e) => setboxSize(parseInt(e.target.value))}
                    value={boxSize}></input>
            </div>
            <button type="submit">Create a Box</button>
        </form>
    );
}



export default Boxscomponents;