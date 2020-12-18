import React from 'react'
import Navigation from './navigation';
import Head from 'next/head'

export default function Container(props) {
    return (
        <div>
            <Head>
                <title>Next JS</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
            </Head>
            <Navigation />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
