export const exercicio2 = (data:string):string=>{
    const date = new Date(data).toLocaleDateString()
    return date
}