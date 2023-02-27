import {extra3} from "../src/extra3"

describe("Exercicio Extra 3", ()=>{
    test("Invertendo Hello world!",()=>{
        const text = extra3("Hello world!")
        expect(text).toEqual("!dlrow olleH")
    })

})