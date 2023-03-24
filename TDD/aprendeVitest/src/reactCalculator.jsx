import {evaluate} from 'mathjs'
import { useState } from 'react';

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () =>{
    const [value, setValue]= useState('')

    const createHandlerClick = op =>()=> setValue(value.concat(op))

    return(
        <section>
        <h1>Calculator</h1>
        <input value={value} readOnly/>
        <div role="grid">
        {rows.map((row, indexRow)=>(
            <div key= {indexRow} role="row">
                {row.map(number=>(
                    <button onClick={ createHandlerClick(number)} key={number}>{number}</button>
                ))}
                </div>
             ))}
             {
                 operations.map(operation=>(
                     <button onClick={createHandlerClick(operation)} key={operation}>{operation}</button>
                 ))
             }
             <button onClick={()=> setValue(evaluate(value))}>{equalSign}</button>
       
        </div>
        </section>
    )
}

// {numbers.map(number=>(<span key={number}>{number}</span>))}

