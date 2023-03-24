// RETOS JS https://adventjs.dev/es#retos

import { describe, expect, it } from "vitest";
import { retoAdventjs } from "../src/retoAdventjs";

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

      it('should return a boolean',()=>{
        expect (retoAdventjs('a', 'b')).toBeTypeOf('boolean')
     })

      it('should return false if strings providers have different length',()=>{
        expect (retoAdventjs('abc','de')).toBe(false)
     })


      it('should return false if strings providers have different length even with same unique letter',()=>{
        expect (retoAdventjs('aab','ab')).toBe(false)
     })

      it('should return false if strings providers have different numbers of unique letters',()=>{
        expect (retoAdventjs('abc','ddd')).toBe(false)
     })

       it('should return false if strings has different order of transformation',()=>{
        expect (retoAdventjs('XBOX','XXBO')).toBe(false)
     })


})


