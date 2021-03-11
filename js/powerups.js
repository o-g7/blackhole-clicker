import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {CorpoCeleste} from "./sprite.js"
import {estadoDoJogo} from "./estadoDoJogo.js"
import {preco} from "./estadoDoJogo.js"
import {imagens} from "./estadoDoJogo.js"
import {mudaClick} from "./estadoDoJogo.js"
import {niveis} from "./estadoDoJogo.js"
import {botoesEl} from "./estadoDoJogo.js"
import {buracoNegroEl} from "./canvas.js"
import {ALTURA_CANVAS} from "./canvas.js"
import {LARGURA_CANVAS} from "./canvas.js"


botoesEl[0].addEventListener('click',() => {
    if(estadoDoJogo.click>=preco.meteoro){
        if(preco.meteoro===10){
            imagens.meteoro.src = "imgs/blackhole-32.png"
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.1, ALTURA_CANVAS * -0.1),16,16,imagens.meteoro,new Vetor(1,4),buracoNegroEl))
        }
        estadoDoJogo.click = estadoDoJogo.click - preco.meteoro
        preco.meteoro = preco.meteoro*2
        niveis.meteoro += 1
        mudaClick()
    }
    botoesEl[0].innerHTML = `<div></div><p>Poder do Meteoro: ${niveis.meteoro}</p><p id="Valor">Valor: ${preco.meteoro}</p>`
})


botoesEl[1].addEventListener('click',() => {
    if(estadoDoJogo.click>=preco.antiMateria){
        niveis.antiMateria += 1
        estadoDoJogo.valorClick = niveis.antiMateria * 2
        estadoDoJogo.click =estadoDoJogo.click - preco.antiMateria
        preco.antiMateria = preco.antiMateria * 2
        mudaClick()
    }
    botoesEl[1].innerHTML = `<div></div><p>Condensador de Antimatéria: ${niveis.antiMateria}</p><p id="Valor">Valor: ${preco.antiMateria}</p>`
})


botoesEl[2].addEventListener('click',()=>{
    if(estadoDoJogo.click>=preco.lua){
        if(preco.lua===1000){
            imagens.lua.src = "imgs/LUA_1_32.png"
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.9, ALTURA_CANVAS * -0.9),32,32,imagens.lua,new Vetor(4,6),buracoNegroEl))
        }
        niveis.lua +=1
        estadoDoJogo.click = estadoDoJogo.click - preco.lua
        preco.lua = preco.lua * 2
        mudaClick()
    }
    botoesEl[2].innerHTML = `<div></div><p>Poder Lua: ${niveis.lua}</p><p id="Valor">Valor: ${preco.lua}</p>`
})

botoesEl[3].addEventListener('click',()=>{
    if(estadoDoJogo.click>=preco.anao){
        if(preco.anao===10000){
            imagens.anao.src = "imgs/LUA_2_128.png"
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS ),48,48,imagens.anao,new Vetor(0,10),buracoNegroEl))
        }
        niveis.anao += 1
        estadoDoJogo.click = estadoDoJogo.click - preco.anao
        preco.anao = preco.anao * 2
        mudaClick()
    }
    botoesEl[3].innerHTML = `<div></div><p>Poder Anão: ${niveis.anao}</p><p id="Valor">Valor: ${preco.anao}</p>`
})

botoesEl[4].addEventListener('click',()=>{
    if(estadoDoJogo.click>=preco.planeta){
        if(preco.planeta===100000){
            imagens.planeta.src = "imgs/LUA_2_128.png"
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
        }
        niveis.planeta += 1
        estadoDoJogo.click = estadoDoJogo.click - preco.planeta
        preco.planeta = preco.planeta * 2
        mudaClick()
    }
    botoesEl[4].innerHTML = `<div></div><p>Poder Planeta: ${niveis.planeta}</p><p id="Valor">Valor: ${preco.planeta}</p>`
})

botoesEl[5].addEventListener('click',()=>{
    if(estadoDoJogo.click>=preco.estrela){
        if(preco.estrela===1000000){
            imagens.estrela.src = "imgs/LUA_2_128.png"
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),128,128,imagens.estrela,new Vetor(0,17.5),buracoNegroEl))
        }
        niveis.estrela += 1
        estadoDoJogo.click = estadoDoJogo.click - preco.estrela
        preco.estrela= preco.estrela * 2
        mudaClick()
    }
    botoesEl[5].innerHTML = `<div></div><p>Poder Planeta: ${niveis.estrela}</p><p id="Valor">Valor: ${preco.estrela}</p>`
})
