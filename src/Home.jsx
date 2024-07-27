import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h2>Welcome to Quiz App</h2>
        <h3>Select Quiz:</h3>
        <NavLink to='/java'>JAVA</NavLink>
        <NavLink to='/sql'>SQL</NavLink>
        <NavLink to='/html'>HTML</NavLink>
    </div>

  )
}
