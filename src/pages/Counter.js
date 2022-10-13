import React, {useState} from "react";

const Counter = () => {
    // React에서는 동적인 값을 State라고 부르고 State를 처리하는 함수가 useState.
    // num은 0이라는 값을 기본값으로 가지는 변수 초기값은 useState(0)에서 정해 줌
    // setNumber은 num에 값을 넣어줄 수 있는 setter함수 역할
    const [num, setNumber] = useState(0);

    const increase = () => {
        // num = num + 1의 역할을 하지만
        // useState를 통해 상태관리를 하겠다고 선언한 변수(num)은 setter함수를 통해서만 상태관리가 가능하다.
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}> +1</button>
            <button onClick={decrease}> -1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;