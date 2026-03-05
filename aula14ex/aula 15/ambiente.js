let num = [5, 8, 2, 9, 3] //vetor
num.push(1) // acrescenta um valor no começo (se colocar abaixo do sort, o valor é acrecentado no fibal do vetor)
num.sort() //coloca em ordem o vetor
console.log(num) //mostra o vetor
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor na posição ${pos}`)

}
