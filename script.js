// usando switch!! para criar um loop que vai indentificar o dia de hj e vai gerar a resposta certa e depois terminar o programa 



var hoje = new Date()
var diasem = hoje.getDay()

switch(diasem) {
    case 0: 
    console.log("Domingo")
    break
    
    case 1: 
    console.log("Segunda")
    break

    case 2: 
    console.log("Terça")
    break

    case 3: 
    console.log("Quarta")
    break

    case 4: 
    console.log("Quinta")
    break

    case 5: 
    console.log("Sexta")
    break

    case 6: 
    console.log("Sabado")
    break
}