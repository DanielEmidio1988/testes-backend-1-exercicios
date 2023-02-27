export const extra2 =(n1: number, n2:number)=>{
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        const erro = {
            erro: true,
        }
        return erro.erro
    }

    const result = {
        divisao: n1 /n2,
        restoDiv: n1 % n2,
    }

    return result
}