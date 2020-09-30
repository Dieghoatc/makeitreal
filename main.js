function count(srt, char){
    let resultado = 0
    for(i = 0; i< srt.length; i++){
        if(srt[i] === char){
            resultado++
        }
    }
    return resultado
}
console.log(count("hola","g"))

function filter(arreglo){
    var nuevoareglo = []
    for (i = 0; i < arreglo.length; i++){
        if(arreglo[i] >= 10){
            nuevoareglo.push(arreglo[i])
        }
    }
    return nuevoareglo
}
console.log(filter([3,12,45,7]))

function hipotenusa (a,b){
    let h = Math.sqrt(Math.pow(a,2)+ Math.pow(b, 2))
    return h 
}
console.log(hipotenusa(3,4))
console.log(hipotenusa(10,13))