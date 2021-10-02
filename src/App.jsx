import React, { useEffect, useState } from 'react'

export default function App() {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+ 1</button>
            <button onClick={() => (counter === 0) ? counter : setCounter(counter - 1)}>- 1</button>
            <br />
            <br />
            <h1>Users</h1>
            {

                users ?

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => {
                                return(
                                    <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>

                    : <h2>Loading...</h2>

            }

        </div>
    )
}


