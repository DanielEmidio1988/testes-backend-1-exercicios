import {exercicio1} from "../src/exercicio1"
describe("Testando exercicio 1",()=>{
    test("Converte numero",()=>{
        const numero = exercicio1("50")
        expect(numero).toBe(50)
    })
})