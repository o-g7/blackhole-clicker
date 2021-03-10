import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"

export let corposCelestes = []
export let estadoDoJogo = {
    click: 0,
    aumentoMassa: 0,
    valorClick: 1
}

export let preco = {
    meteoro: 10,
    antiMateria: 250,
    lua: 1000,
    anao: 5000,
    planeta: 10000,
    estrela : 100000
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
    lua: new Image
}

export let aumentarUnidadeMassa = ()=> {
    let unidadeMassa = document.querySelector('#massa')
    if(estadoDoJogo.click === 1){
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidade de massa` 
    } else {
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidades de massa` 
    }
}

