import React from 'react';
import Container from '../../components/container';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';

export default function UserProfile({user}) {

    const router = useRouter()
    const obj = router.query;

    return (
        <Container>
            Profile {user.first_name} {user.last_name}
        </Container>
    )
}

UserProfile.getInitialProps = async (ctx) => {
    const id = ctx.query.id;

    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const response = await res.json();
    return { user: response.data }
}
