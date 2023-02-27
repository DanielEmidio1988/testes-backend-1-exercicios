export const extra4 = (text:string) =>{
    const newObject = JSON.parse(text)
    const newArray = [newObject.id, newObject.nome]

    return newArray
}