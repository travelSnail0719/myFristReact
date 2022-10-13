import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTxtValue] = useState("");

    const changeText = (e) => {
        setTxtValue(e.target.value);
    }

    return (
        <div>
            <input type={Text} value={txtValue} onChange={changeText}/>
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;