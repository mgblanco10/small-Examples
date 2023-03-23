import {describe, expect, it} from  "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz",()=> {
    it('should be a function',()=>{
       expect (typeof fizzbuzz).toBe('function')
    })

    it('should throw if not number is provider as parameter',()=>{
        expect (()=>fizzbuzz()).toThrow()
     })

     it('should throw a specific error message if not number is provider as parameter ',()=>{
        expect (()=>fizzbuzz()).toThrow(/number/)
        expect (()=>fizzbuzz()).toThrow('parameter provider must be a number')
     })


     it('should throw a specific error message if not number is provider',()=>{
        expect (()=>fizzbuzz(NaN)).toThrow('parameter provider must be a number')
     })

     it('should return 1 if number provided is 1',()=>{
        expect (fizzbuzz(1)).toBe(1)
     })

     it('should return 1 if number provided is 2',()=>{
        expect (fizzbuzz(2)).toBe(2)
     })

     it('should return 3 if number provided is 3',()=>{
        expect (fizzbuzz(3)).toBe("fizz")
     })


     it('should return "fizz" if number provided is multiply of 3',()=>{
        expect (fizzbuzz(6)).toBe("fizz")
        expect (fizzbuzz(9)).toBe("fizz")
        expect (fizzbuzz(12)).toBe("fizz")
     })

    //  it('should return 4 if number provided is multiply of 4',()=>{
    //     expect (fizzbuzz(4)).toBe(4)
    //  }) --> Como ya pasa en verde al crearlo no es necesario dejarlo ya que esta cubierto en el algoritmo OJO redundante

     it('should return 5 if number provided is multiply of 5',()=>{
        expect (fizzbuzz(5)).toBe("buzz")
     })

     it('should return "buzz" if number provided is multiply of 5',()=>{
        expect (fizzbuzz(10)).toBe("buzz")
        expect (fizzbuzz(25)).toBe("buzz")
        expect (fizzbuzz(20)).toBe("buzz")
     })

     it('should return "fizzbuzz" if number provided is multiply of 15',()=>{
        expect (fizzbuzz(15)).toBe("fizzbuzz")
     })

     it('should return "woff" if number provided is 7',()=>{
      expect (fizzbuzz(7)).toBe("woff")
   })
   it('should return "fizzwoff" if number provided is 21',()=>{
      expect (fizzbuzz(21)).toBe("fizzwoff")
   })

})