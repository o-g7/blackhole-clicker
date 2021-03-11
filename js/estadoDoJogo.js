import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {buracoNegroEl} from "./canvas.js"

export let corposCelestes = []
export let estadoDoJogo = {
    click: 0,
    aumentoMassa: 1,
    horaDeAumentar: 1000,
    valorClick: 1
}

export let preco = {
    meteoro: 10,
    antiMateria: 250,
    lua: 1000,
    anao: 10000,
    planeta: 100000,
    estrela : 1000000
}

export let niveis = {
    meteoro: 0,
    antiMateria: 0,
    lua: 0,
    anao: 0,
    planeta: 0,
    estrela : 0
}

export let imagens = {
    meteoro: new Image,
    lua: new Image,
    anao: new Image,
    planeta: new Image,
    estrela: new Image
}

export let botoesEl = document.querySelectorAll('.comprar')
let posicaoBotao = 2

function construirBotoes() {
    botoesEl[posicaoBotao].classList.remove('construindo')
    if(posicaoBotao<5){
        botoesEl[posicaoBotao + 1].classList.remove('desligado')
        botoesEl[posicaoBotao + 1].classList.add('construindo')
    }
    posicaoBotao++
}

export let mudaClick = ()=> {
    let unidadeMassa = document.querySelector('#massa')

    if(estadoDoJogo.click === 1){
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidade de massa` 
    } else {
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidades de massa` 
    }

    if(estadoDoJogo.click >= estadoDoJogo.horaDeAumentar){
        if(posicaoBotao<=6){
            construirBotoes()
        }
        buracoNegroEl.atualizandoBuracoNegro(estadoDoJogo.aumentoMassa)
        estadoDoJogo.aumentoMassa = estadoDoJogo.aumentoMassa + 0.7
        estadoDoJogo.horaDeAumentar = estadoDoJogo.horaDeAumentar*10
    }
}

