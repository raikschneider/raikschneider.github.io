import React from 'react'

export default function About({ setCurrentPage }) {

    // have to replace "javascript:void(0)" with a different solution, since it throws a massive warning in the console
    return (
        <div><a href='javascript:void(0)' onClick={() => setCurrentPage('Home')}>BACK</a>About</div>
    )
}
