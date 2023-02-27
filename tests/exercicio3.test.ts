import {exercicio3} from "../src/exercicio3"
describe("Exercicio 3",() =>{

    test("Procurar por 'Astrodev' no Array",()=>{
        const busca = exercicio3("Astrodev")

        expect(busca).toBeTruthy()
    })
})