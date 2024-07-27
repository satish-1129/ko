import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sql() {
  return (
    <>
    
    <NavLink to='/java'>JAVA</NavLink>
    <NavLink to='/sql'>SQL</NavLink>
    <NavLink to='/html'>HTML</NavLink>
    <div>
        <h2>Sql Quiz:</h2>
        <p>3 Sql Questions</p>
        <form>
            <h3>Q 1.SQL views are known as?</h3><br></br>
            <input type='radio' name='q1' value='A'></input>simple tables<br></br>
            <input type='radio' name='q1' value='B'></input>virtual tables<br></br>
            <input type='radio' name='q1' value='C'></input>Complex tables <br></br>
            <input type='radio' name='q1' value='D'></input>Actual Tables<br></br>

            <h3>Q 2.How many Primary keys can have in a table?</h3><br></br>
            <input type='radio' name='q2' value='A'></input>only 1 <br></br>
            <input type='radio' name='q2' value='B'></input>only 2 <br></br>
            <input type='radio' name='q2' value='C'></input>Depends on no of Columns <br></br>
            <input type='radio' name='q2' value='D'></input>Depends on DBA<br></br>

            <h3>Q 3.Which of the following is not a valid aggregate function?</h3><br></br>
            <input type='radio' name='q3' value='A'></input>COUNT <br></br>
            <input type='radio' name='q3' value='B'></input>COMPUTE <br></br>
            <input type='radio' name='q3' value='C'></input>SUM <br></br>
            <input type='radio' name='q3' value='D'></input>MAX <br></br>

           <input type='submit'></input><br></br>
        </form>
    </div>
    </>
   
  )
}
