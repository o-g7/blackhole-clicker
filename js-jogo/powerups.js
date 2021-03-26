import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {CorpoCeleste} from "./sprite.js"
import {estadoDoJogo} from "./estadoDoJogo.js"
import {imagens} from "./estadoDoJogo.js"
import {atualizaClick} from "./estadoDoJogo.js"
import {botoesEl} from "./estadoDoJogo.js"
import {buracoNegroEl} from "./canvas.js"
import {ALTURA_CANVAS} from "./canvas.js"
import {LARGURA_CANVAS} from "./canvas.js"

let primeiroPush = {
    meteoro: false,
    lua: false,
    anao: false,
    planeta: false,
    estrela: false
}

export function restauracao(){
    botoesEl[0].innerHTML = `<div></div><p>Poder do Meteoro: ${estadoDoJogo.meteoro.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.meteoro.preco.toLocaleString()}</p>`
    botoesEl[1].innerHTML = `<div></div><p>Condensador de Antimatéria: ${estadoDoJogo.antiMateria.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.antiMateria.preco.toLocaleString()}</p>`
    botoesEl[2].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Lua: ${estadoDoJogo.lua.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.lua.preco.toLocaleString()}</p>`
    botoesEl[3].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Anão: ${estadoDoJogo.anao.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.anao.preco.toLocaleString()}</p>`
    botoesEl[4].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Planeta: ${estadoDoJogo.planeta.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.planeta.preco.toLocaleString()}</p>`
    botoesEl[5].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Estrela: ${estadoDoJogo.estrela.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.estrela.preco.toLocaleString()}</p>`

    if(estadoDoJogo.meteoro.existencia && !primeiroPush.meteoro) {
        primeiroPush.meteoro = true
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.1, ALTURA_CANVAS * -0.1),16,16,imagens.meteoro,new Vetor(1,4),buracoNegroEl))
    }
    if(estadoDoJogo.lua.existencia && !primeiroPush.lua) {
        primeiroPush.lua = true
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.9, ALTURA_CANVAS * -0.9),32,32,imagens.lua,new Vetor(4,6),buracoNegroEl))
    }
    if(estadoDoJogo.anao.existencia && !primeiroPush.anao) {
        primeiroPush.anao = true
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS ),48,48,imagens.anao,new Vetor(0,10),buracoNegroEl))
    }
    if(estadoDoJogo.planeta.existencia && !primeiroPush.planeta) {
        primeiroPush.planeta = true
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
    }
    if(estadoDoJogo.estrela.existencia && !primeiroPush.estrela) {
        primeiroPush.estrela = true
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * 1.7, ALTURA_CANVAS * -1.7),128,128,imagens.estrela,new Vetor(0,17.5),buracoNegroEl))
    }
}

function powerUp(corpo){
    if(estadoDoJogo.click>=estadoDoJogo[corpo].preco){
        if(!estadoDoJogo[corpo].existencia){
            estadoDoJogo[corpo].existencia = true
        }
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo[corpo].preco
        estadoDoJogo[corpo].preco = estadoDoJogo[corpo].preco * 2
        estadoDoJogo[corpo].nivel += 1
        atualizaClick()
    }
    restauracao()
}

botoesEl[0].addEventListener('click', () => {
    const corpoB1 = 'meteoro'
    powerUp(corpoB1)
})


botoesEl[1].addEventListener('click',() => {
    if(estadoDoJogo.click>=estadoDoJogo.antiMateria.preco){
        if(!estadoDoJogo.antiMateria.existencia){
            estadoDoJogo.antiMateria.existencia = true
        }
        estadoDoJogo.antiMateria.nivel += 1
        estadoDoJogo.valorClick = estadoDoJogo.antiMateria.nivel * 2
        estadoDoJogo.click =estadoDoJogo.click - estadoDoJogo.antiMateria.preco
        estadoDoJogo.antiMateria.preco = estadoDoJogo.antiMateria.preco * 2
        atualizaClick()
    }
    restauracao()
})    


botoesEl[2].addEventListener('click',()=>{
    const corpoB2 = 'lua'
    powerUp(corpoB2)
})

botoesEl[3].addEventListener('click',()=>{
    const corpoB3 = 'anao'
    powerUp(corpoB3)
})

botoesEl[4].addEventListener('click',()=>{
    const corpoB4 = 'planeta'
    powerUp(corpoB4)
})

botoesEl[5].addEventListener('click',()=>{
    const corpoB5 = 'estrela'
    powerUp(corpoB5)
})

botoesEl[6].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.bigBang.preco){
        estadoDoJogo.click -= estadoDoJogo.bigBang.preco
        estadoDoJogo.bigBang.chegouHora = true
    }
})