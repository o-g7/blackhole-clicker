import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {buracoNegroEl} from "./canvas.js"
export let corposCelestes = [] // vetor de corposCeleste inicialmente vazio
export let estadoDoJogo = { // objeto com todos os dados necessarios para o jogo
    click: 0,
    valorClick: 1,
    tempo: Date.now(),
    meteoro: {
        preco: 10,
        nivel: 0,
        existencia: false
    },
    antiMateria: {
        preco: 250,
        nivel: 0,
        existencia: false
    },
    lua: {
        preco: 1000,
        nivel: 0,
        existencia: false
    },
    anao: {
        preco: 10000,
        nivel: 0,
        existencia: false
    },
    planeta: {
        preco: 100000,
        nivel: 0,
        existencia: false
    },
    estrela: {
        preco: 1000000,
        nivel: 0,
        existencia: false
    },
    bigBang: {
        preco : 100000000,
        chegouHora: false
    }
}
export let imagens = { // objeto de imagens
    meteoro: new Image,
    lua: new Image,
    anao: new Image,
    planeta: new Image,
    estrela: new Image
}

let horaDeAumentar = 1000 // defini o paremetro para quando aumentar o buraco negro 
export let aumentoMassa = 1 // defini o parametro para aumentar a massa do buraco negro

// endereco das imagens
imagens.meteoro.src = "imgs/Meteoro_1_16.png"
imagens.lua.src = "imgs/LUA_1_32.png"
imagens.anao.src = "imgs/planetaAnao.png"
imagens.planeta.src = "imgs/Planeta.png"
imagens.estrela.src = "imgs/estrela.png"

export let botoesEl = document.querySelectorAll('.comprar') // botoes de compra
let posicaoBotao = 2 // posicao de botao

// cria os botoes no decorrer do jogo
function construirBotoes() {
    botoesEl[posicaoBotao].classList.remove('construindo') // remove classe construindo
    if(posicaoBotao<6){
        botoesEl[posicaoBotao + 1].classList.remove('desligado') // remove classe desligado
        botoesEl[posicaoBotao + 1].classList.add('construindo') // adiciona classe construindo
    }
    posicaoBotao++ // aumenta o numero de posicao de botao
}

// fucao para mudar propriedades sobre o buraco negro
export let upgradeBuracoNegro = () => { 
    while(estadoDoJogo.click >= horaDeAumentar){ // enquanto for hora de aumentar
        if(posicaoBotao<=6){
            construirBotoes() // chama a funcao 
        }
        aumentoMassa = aumentoMassa + 0.7 // aumenta a massa
        buracoNegroEl.atualizandoBuracoNegro(aumentoMassa) // atualiza o buraco com a nova massa
        horaDeAumentar = horaDeAumentar*10 // aumenta o parametro de aumentar o buraco negro
        if (horaDeAumentar >= 10000000) { 
            horaDeAumentar = horaDeAumentar*10 // aumenta mais se corresponder ao condicao anterior
        }
    }
}

// fucao para mudar propriedades sobre o click
export let atualizaClick = () => {

    atualizaContador() // chama funcao 

    upgradeBuracoNegro() // chama funcao 
    
    salvarLocalmente() // chama funcao 
    
}

// atuliza o contador de massa
export let atualizaContador = () => {
    let unidadeMassa = document.querySelector('#massa')
    if(estadoDoJogo.click === 1){
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidade de massa` // insere o 1 na unidade de massa
    } 
    
    else {
        unidadeMassa.innerHTML = `${estadoDoJogo.click.toLocaleString()} unidades de massa`  // muda constantemente o valor da massa
    }
}

// salvar o estado do jogo
const salvarLocalmente = () => {
    localStorage.setItem('estadoFinal', JSON.stringify(estadoDoJogo)) 
}
