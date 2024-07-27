import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Java() {
  return (
    <> 
    <NavLink to='/java'>JAVA</NavLink>
    <NavLink to='/sql'>SQL</NavLink>
    <NavLink to='/html'>HTML</NavLink>
    <div>
        <h2>Java Quiz:</h2>
        <p>3 Java Questions</p>
        <form>
            <h3>Q 1.Size of 'int' is ?</h3><br></br>
            <input type='radio' name='q1' value='A'></input>2 bytes <br></br>
            <input type='radio' name='q1' value='B'></input>4 bytes <br></br>
            <input type='radio' name='q1' value='C'></input>8 bytes <br></br>
            <input type='radio' name='q1' value='D'></input>6 bytes <br></br>

            <h3>Q 2.Size of 'char' is ?</h3><br></br>
            <input type='radio' name='q2' value='A'></input>2 bytes <br></br>
            <input type='radio' name='q2' value='B'></input>4 bytes <br></br>
            <input type='radio' name='q2' value='C'></input>8 bytes <br></br>
            <input type='radio' name='q2' value='D'></input>6 bytes <br></br>

            <h3>Q 3.Size of 'double' is ?</h3><br></br>
            <input type='radio' name='q3' value='A'></input>2 bytes <br></br>
            <input type='radio' name='q3' value='B'></input>4 bytes <br></br>
            <input type='radio' name='q3' value='C'></input>8 bytes <br></br>
            <input type='radio' name='q3' value='D'></input>6 bytes <br></br>

           <input type='submit'></input><br></br>
        </form>
    </div>
    </>
  )
}
