import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {buracoNegroEl} from "./canvas.js"

export let corposCelestes = []
export let estadoDoJogo = {
    click: 0,
    valorClick: 1,
    precos: {
        meteoro: 10,
        antiMateria: 250,
        lua: 1000,
        anao: 10000,
        planeta: 100000,
        estrela : 1000000
    },
    niveis : {
        meteoro: 0,
        antiMateria: 0,
        lua: 0,
        anao: 0,
        planeta: 0,
        estrela : 0
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
export let aumentoMassa = 10

imagens.meteoro.src = "imgs/blackhole-32.png"
imagens.lua.src = "imgs/LUA_1_32.png"
imagens.anao.src = "imgs/LUA_2_128.png"
imagens.planeta.src = "imgs/LUA_2_128.png"
imagens.estrela.src = "imgs/LUA_2_128.png"

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

export let upgradeBuracoNegro = () =>{
    while(estadoDoJogo.click >= horaDeAumentar){
        if(posicaoBotao<=6){
            construirBotoes()
        }
        aumentoMassa = aumentoMassa + 0.7
        buracoNegroEl.atualizandoBuracoNegro(aumentoMassa)
        horaDeAumentar = horaDeAumentar*10
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
        unidadeMassa.innerHTML = `${estadoDoJogo.click} unidades de massa` 
    }
}
 
const salvarLocalmente = () => {
    localStorage.setItem('estadoFinal', JSON.stringify(estadoDoJogo))
}
