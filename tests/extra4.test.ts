import {extra4} from "../src/extra4"
describe("Exercicio Extra 4",()=>{
    test("Retornar 2 chaves",()=>{
        const textKeys = JSON.stringify({id:"1",nome:"Astrodev"})
        const array = extra4(textKeys)
        const result = ["1","Astrodev"]
        expect(array).toEqual(result)
    })
})