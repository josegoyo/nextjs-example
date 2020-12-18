import React from 'react'
import Router from 'next/router'

export default function Users({users}) {

    const showInfo = (id) => {
        Router.push('/users/[id]', `/users/${id}`)
    }
    
    return (
        <div>
            <h1>Users</h1>
            <div className="row">
            {
                users.map( (user, pos) => (
                    <div key={pos} className="col-sm-6" onClick={() => showInfo(user.id)}>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                            <p className="card-text">Company: {user.email}</p>
                        </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
