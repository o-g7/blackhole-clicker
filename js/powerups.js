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

botoesEl[0].addEventListener('click', () => {
    if(estadoDoJogo.click>=estadoDoJogo.precos.meteoro){
        if(estadoDoJogo.precos.meteoro===10){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.1, ALTURA_CANVAS * -0.1),16,16,imagens.meteoro,new Vetor(1,4),buracoNegroEl))
        }
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.meteoro
        estadoDoJogo.precos.meteoro = estadoDoJogo.precos.meteoro*2
        estadoDoJogo.niveis.meteoro += 1
        atualizaClick()
    }
    botoesEl[0].innerHTML = `<div></div><p>Poder do Meteoro: ${estadoDoJogo.niveis.meteoro}</p><p id="Valor">Valor: ${estadoDoJogo.precos.meteoro}</p>`
})


botoesEl[1].addEventListener('click',() => {
    if(estadoDoJogo.click>=estadoDoJogo.precos.antiMateria){
        estadoDoJogo.niveis.antiMateria += 1
        estadoDoJogo.valorClick = estadoDoJogo.niveis.antiMateria * 2
        estadoDoJogo.click =estadoDoJogo.click - estadoDoJogo.precos.antiMateria
        estadoDoJogo.precos.antiMateria = estadoDoJogo.precos.antiMateria * 2
        atualizaClick()
    }
    botoesEl[1].innerHTML = `<div></div><p>Condensador de Antimatéria: ${estadoDoJogo.niveis.antiMateria}</p><p id="Valor">Valor: ${estadoDoJogo.precos.antiMateria}</p>`
})


botoesEl[2].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.precos.lua){
        if(estadoDoJogo.precos.lua===1000){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.9, ALTURA_CANVAS * -0.9),32,32,imagens.lua,new Vetor(4,6),buracoNegroEl))
        }
        estadoDoJogo.niveis.lua +=1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.lua
        estadoDoJogo.precos.lua = estadoDoJogo.precos.lua * 2
        atualizaClick()
    }
    botoesEl[2].innerHTML = `<div></div><p>Poder Lua: ${estadoDoJogo.niveis.lua}</p><p id="Valor">Valor: ${estadoDoJogo.precos.lua}</p>`
})

botoesEl[3].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.precos.anao){
        if(estadoDoJogo.precos.anao===10000){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS ),48,48,imagens.anao,new Vetor(0,10),buracoNegroEl))
        }
        estadoDoJogo.niveis.anao += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.anao
        estadoDoJogo.precos.anao = estadoDoJogo.precos.anao * 2
        atualizaClick()
    }
    botoesEl[3].innerHTML = `<div></div><p>Poder Anão: ${estadoDoJogo.niveis.anao}</p><p id="Valor">Valor: ${estadoDoJogo.precos.anao}</p>`
})

botoesEl[4].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.precos.planeta){
        if(estadoDoJogo.precos.planeta===100000){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
        }
        estadoDoJogo.niveis.planeta += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.planeta
        estadoDoJogo.precos.planeta = estadoDoJogo.precos.planeta * 2
        atualizaClick()
    }
    botoesEl[4].innerHTML = `<div></div><p>Poder Planeta: ${estadoDoJogo.niveis.planeta}</p><p id="Valor">Valor: ${estadoDoJogo.precos.planeta}</p>`
})

botoesEl[5].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.precos.estrela){
        if(estadoDoJogo.precos.estrela===1000000){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),128,128,imagens.estrela,new Vetor(0,17.5),buracoNegroEl))
        }
        estadoDoJogo.niveis.estrela += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.estrela
        estadoDoJogo.precos.estrela= estadoDoJogo.precos.estrela * 2
        atualizaClick()
    }
    botoesEl[5].innerHTML = `<div></div><p>Poder Planeta: ${estadoDoJogo.niveis.estrela}</p><p id="Valor">Valor: ${estadoDoJogo.precos.estrela}</p>`
})
