export const extra3 = (text:string)=>{
    let aux = ""
    for(let i=text.length -1;i >= 0; i--){
        aux += text[i]
    }
    return aux
}