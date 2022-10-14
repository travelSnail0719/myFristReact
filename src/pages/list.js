import React from "react";

const User = ({userData}) => {
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

// 배열에 들어있는 user정보를 통해 Table구조로 데이터 출력
const UserList = () => {
    const users = [
        {email : 'yoo@naver.com', name : '유재석'},
        {email : 'ji1@naver.com', name : '지석진'},
        {email : 'haha@naver.com', name : '하하'},
        {email : 'song@naver.com', name : '송지효'}
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {/* users의 배열에 담긴 정보를 User의 userData 프로퍼티에 하나씩 담아주는 것. */}
                {/* UserList입장에서는 User이 자식 컴포넌트가 되는 것. */}
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}
export default UserList;