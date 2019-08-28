let myBtn = document.getElementById('botao')

console.log(myBtn)
myBtn.innerText = 'Oh botao'

// quando busca por className retorna um array pq varias podem usar essa classe
let container = document.getElementsByClassName("classediv")
console.log(container)
console.log(container[0])

// alterando em tempo de execucao
container[0].innerHTML = container[0].innerHTML + '<span>Aqui eh um outro texto dentro do span</span>'

myBtn.addEventListener('click', (evento) => {
    console.log('clicou')
    container[1].innerHTML = container[1].innerHTML + '<span> Pará </span>'
})


let novoSpan = document.createElement('span')
novoSpan.innerText = 'Texto no novo SPAN'

// fazendo apenas oq está acima, não aconteveria nada..
// precisa colocar p algum lugar
container[0].append(novoSpan)

// TUDO ISSO NÃO É MTO PERFORMÁTICO, é bem "Vanilão"

