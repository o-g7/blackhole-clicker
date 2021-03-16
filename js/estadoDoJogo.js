import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {buracoNegroEl} from "./canvas.js"

export let corposCelestes = []
export let estadoDoJogo = {
    click: 0,
    valorClick: 1,
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

export let imagens = {
    meteoro: new Image,
    lua: new Image,
    anao: new Image,
    planeta: new Image,
    estrela: new Image
}

let horaDeAumentar = 1000
export let aumentoMassa = 1

imagens.meteoro.src = "imgs/Meteoro_1_16.png"
imagens.lua.src = "imgs/LUA_1_32.png"
imagens.anao.src = "imgs/LUA_2_128.png"
imagens.planeta.src = "imgs/LUA_2_128.png"
imagens.estrela.src = "imgs/LUA_2_128.png"

export let botoesEl = document.querySelectorAll('.comprar')
let posicaoBotao = 2

function construirBotoes() {
    botoesEl[posicaoBotao].classList.remove('construindo')
    if(posicaoBotao<6){
        botoesEl[posicaoBotao + 1].classList.remove('desligado')
        botoesEl[posicaoBotao + 1].classList.add('construindo')
    }
    posicaoBotao++
}

export let upgradeBuracoNegro = () => { 
    while(estadoDoJogo.click >= horaDeAumentar){
        if(posicaoBotao<=6){
            construirBotoes()
        }
        aumentoMassa = aumentoMassa + 0.7
        buracoNegroEl.atualizandoBuracoNegro(aumentoMassa)
        horaDeAumentar = horaDeAumentar*10
        if (horaDeAumentar >= 10000000) {
            horaDeAumentar = horaDeAumentar*10
        }
    }
}

export let atualizaClick = () => {

    atualizaContador()

    upgradeBuracoNegro()
    
    salvarLocalmente()
    
}

export let atualizaContador = () => {
    let unidadeMassa = document.querySelector('#massa')
    if(estadoDoJogo.click === 1){
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidade de massa` 
    } 
    
    else {
        unidadeMassa.innerHTML = `${estadoDoJogo.click.toLocaleString()} unidades de massa` 
    }
}
 
const salvarLocalmente = () => {
    localStorage.setItem('estadoFinal', JSON.stringify(estadoDoJogo))
}
