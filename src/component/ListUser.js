import React, { useEffect, useState } from 'react'


export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL+'/'+ process.env.REACT_APP_USER_API)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [])

    return (
        <div className='container'>
            <h1 className="h-100 d-flex align-items-center justify-content-center"> All Users</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name </th>
                        <th scope="col">Email</th>
                        <th scope="col">Created At</th>
                    </tr>
                </thead>
                <tbody>

                   
                    {users.length >0 ?

                        (
                            users.map((user) => {
                                var date = new Date(user.createdAt);

                                return <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{date.getDay() +"/" +date.getMonth() +"/" +date.getFullYear()}</td>
                                </tr>
                            })

                        ) : (
                             <tr> 
                                <td  colSpan="5">No Record Found!</td>

                            </tr>
                        )}

                </tbody>
            </table>
        </div>
    )
}
