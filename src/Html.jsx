import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Html() {
  return (
    <>
    <NavLink to='/java'>JAVA</NavLink>
    <NavLink to='/sql'>SQL</NavLink>
    <NavLink to='/html'>HTML</NavLink>
    <div>
        <h2>HTML Quiz:</h2>
        <p>3 HTML Questions</p>
        <form>
            <h3>Q 1.Which character is used to represent the closing of a tag in HTML?</h3><br></br>
            <input type='radio' name='q1' value='A'></input> \ <br></br>
            <input type='radio' name='q1' value='B'></input> ! <br></br>
            <input type='radio' name='q1' value='C'></input> / <br></br>
            <input type='radio' name='q1' value='D'></input> . <br></br>

            <h3>Q 2.The "hr" tag in HTML is used for -</h3><br></br>
            <input type='radio' name='q2' value='A'></input> new line <br></br>
            <input type='radio' name='q2' value='B'></input> vertical ruler <br></br>
            <input type='radio' name='q2' value='C'></input> new paragraph <br></br>
            <input type='radio' name='q2' value='C'></input> horizontal ruler <br></br>

            <h3>Q 3.Which of the following HTML attribute used to define inline styles?</h3><br></br>
            <input type='radio' name='q3' value='A'></input>style <br></br>
            <input type='radio' name='q3' value='B'></input>type <br></br>
            <input type='radio' name='q3' value='C'></input>class <br></br>
            <input type='radio' name='q3' value='D'></input>None of the above <br></br>

           <input type='submit'></input><br></br>
        </form>
    </div>
    </>
  )
}
