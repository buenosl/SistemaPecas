let pesoPeca  = 100

if(pesoPeca > 100) {
    console.log("Peso maior que 100gr podemos cadastrar a peça")
} else { 
    console.log("Peso insuficiente, não é possível cadastrar.")
}

let numeroPecas = 10

if (numeroPecas < 10) {
    console.log ("Numero de peças menor que 10 pode incluir na caixa.")
} else {
    console.log ("Numero de peças maior que 10, não pode incluir na caixa")
}

let nomePeca = 'Disco de freio'
console.log("O comprimento do nome da peça é:", nomePeca.length)

if (nomePeca.length < 3) {
    console.log ("Tamanho dos caracteres menor que 3, Não pode cadastrar.")
} else {
    console.log ("Tamanho do caracter maior que 3 Pode cadastrar")
}