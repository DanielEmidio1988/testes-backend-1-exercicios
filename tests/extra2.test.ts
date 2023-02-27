import {extra2} from "../src/extra2"

describe("Exercicio extra 2", ()=>{
    test("Verifica 2 numeros e retorna resultado divisão e resto de divisão",()=>{
        const nums = extra2(4,2)
        const results = {
            divisao: 2,
            restoDiv: 0,
        }
        expect(nums).toEqual(results)
    })
})