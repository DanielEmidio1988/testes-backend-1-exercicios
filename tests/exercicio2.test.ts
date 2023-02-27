import {exercicio2} from "../src/exercicio2"

describe("Exercicio 2",()=>{
    test("Convertendo Data",()=>{
        const data = exercicio2("2022/02/27")
        expect(data).toEqual("27/02/2022")  
    })
})