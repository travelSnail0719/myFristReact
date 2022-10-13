import React, {useState} from "react";

const Input2 = () => {
    // 여러개의 데이터를 한번에 처리 할 떄
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        tel : ""
    });

    // inputs에 있는 object요소를 빼온다.
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            // object의 깊은 복사를 통해 새로운 object를 만듦
            ...inputs,
            [id] : value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type={"text"} id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type={"email"} id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type={"tel"} id="tel" value={tel} onChange={onChange}/>
            </div>

            <p>이름 : {name}</p>
            <p> 이메일 : {email}</p>
            <p> 전화번호 : {tel}</p>
            
        </div>
    )
}

export default Input2;