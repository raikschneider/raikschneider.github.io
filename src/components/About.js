import React from 'react'

export default function About({ setCurrentPage }) {
    return (
        <div><a href='javascript:void(0)' onClick={() => setCurrentPage('Home')}>BACK</a>About</div>
    )
}
