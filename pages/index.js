import React from 'react';
import Container from './../components/container';
import Users from './../components/users';
import fetch from 'isomorphic-fetch';

export default function Index ({users}) {

    console.log('users', users);
    return (
        <Container>
            <h1>Index</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
            <Users  users={users}/>
        </Container>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const response = await res.json();
    return { users: response.data }
}