import {extra1} from "../src/extra1"

describe("Exercicios extras - 1",()=>{
    test("Retorna valor extenso entre 1 e 10",()=>{
        const num = extra1(10)
        expect(num).toContain("dez")
    })
})