// RETOS JS https://adventjs.dev/es#retos

import { describe, expect, it } from "vitest";

const retoAdventjs = (from, to)=>{
    // if(from === undefined) throw new Error ('from is required')
    if(from != 'string') throw new Error ('from is not a string')
    if (typeof to != 'string') throw new Error ('to is not a string')
} 

describe("retoAdventjs", ()=>{
    it('should be a function',()=>{
        expect (retoAdventjs).toBeTypeOf('function')
     })

     it('should throw if first parameter is missing',()=>{
        expect (()=>retoAdventjs()).toThrow()
     })

     it('should throw if first parameter is not a string',()=>{
        expect (()=>retoAdventjs(2)).toThrow()
     })

     it('should throw if second parameter is not a string',()=>{
        expect (()=>retoAdventjs('a')).toThrow()
     })


})


