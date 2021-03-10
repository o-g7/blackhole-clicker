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