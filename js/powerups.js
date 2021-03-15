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

export function restauracao(){
    botoesEl[0].innerHTML = `<div></div><p>Poder do Meteoro: ${estadoDoJogo.meteoro.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.meteoro.preco}</p>`
    botoesEl[1].innerHTML = `<div></div><p>Condensador de Antimatéria: ${estadoDoJogo.antiMateria.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.antiMateria.preco}</p>`
    botoesEl[2].innerHTML = `<div></div><p>Poder Lua: ${estadoDoJogo.lua.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.lua.preco}</p>`
    botoesEl[3].innerHTML = `<div></div><p>Poder Anão: ${estadoDoJogo.anao.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.anao.preco}</p>`
    botoesEl[4].innerHTML = `<div></div><p>Poder Planeta: ${estadoDoJogo.planeta.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.planeta.preco}</p>`
    botoesEl[5].innerHTML = `<div></div><p>Poder Estrela: ${estadoDoJogo.estrela.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.estrela.preco}</p>`

    if(estadoDoJogo.meteoro.existencia) {
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.1, ALTURA_CANVAS * -0.1),16,16,imagens.meteoro,new Vetor(1,4),buracoNegroEl))
    }
    if(estadoDoJogo.lua.existencia) {
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.9, ALTURA_CANVAS * -0.9),32,32,imagens.lua,new Vetor(4,6),buracoNegroEl))
    }
    if(estadoDoJogo.anao.existencia) {
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS ),48,48,imagens.anao,new Vetor(0,10),buracoNegroEl))
    }
    if(estadoDoJogo.planeta.existencia) {
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
    }
    if(estadoDoJogo.estrela.existencia) {
        corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
    }
}

botoesEl[0].addEventListener('click', () => {
    if(estadoDoJogo.click>=estadoDoJogo.meteoro.preco){
        if(!estadoDoJogo.meteoro.existencia){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.1, ALTURA_CANVAS * -0.1),16,16,imagens.meteoro,new Vetor(1,4),buracoNegroEl))
            estadoDoJogo.meteoro.existencia = true
        }
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.meteoro.preco
        estadoDoJogo.meteoro.preco = estadoDoJogo.meteoro.preco * 2
        estadoDoJogo.meteoro.nivel += 1
        atualizaClick()
    }
    restauracao()
})


botoesEl[1].addEventListener('click',() => {
    if(estadoDoJogo.click>=estadoDoJogo.antiMateria.preco){
        estadoDoJogo.antiMateria.nivel += 1
        estadoDoJogo.valorClick = estadoDoJogo.antiMateria.nivel * 2
        estadoDoJogo.click =estadoDoJogo.click - estadoDoJogo.antiMateria.preco
        estadoDoJogo.antiMateria.preco = estadoDoJogo.antiMateria.preco * 2
        atualizaClick()
    }
    restauracao()
})    


botoesEl[2].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.lua.preco){
        if(!estadoDoJogo.lua.existencia){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS * -0.9, ALTURA_CANVAS * -0.9),32,32,imagens.lua,new Vetor(4,6),buracoNegroEl))
            estadoDoJogo.lua.existencia = true
        }
        estadoDoJogo.lua.nivel +=1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.lua.preco
        estadoDoJogo.lua.preco = estadoDoJogo.lua.preco * 2
        atualizaClick()
    }
    restauracao()
})

botoesEl[3].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.anao.preco){
        if(!estadoDoJogo.anao.existencia){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS ),48,48,imagens.anao,new Vetor(0,10),buracoNegroEl))
            estadoDoJogo.anao.existencia = true
        }
        estadoDoJogo.anao.nivel += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.anao.preco
        estadoDoJogo.anao.preco = estadoDoJogo.anao.preco * 2
        atualizaClick()
    }
    restauracao()
})

botoesEl[4].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.planeta.preco){
        if(!estadoDoJogo.existencia.planeta){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),64,64,imagens.planeta,new Vetor(0,17.5),buracoNegroEl))
            estadoDoJogo.existencia.planeta = true
        }
        estadoDoJogo.planeta.nivel += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.precos.planeta
        estadoDoJogo.planeta.preco = estadoDoJogo.planeta.preco * 2
        atualizaClick()
    }
    restauracao()
})

botoesEl[5].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.estrela.preco){
        if(!estadoDoJogo.estrela.existencia){
            corposCelestes.push(new CorpoCeleste(new Vetor(LARGURA_CANVAS , ALTURA_CANVAS * -0.9),128,128,imagens.estrela,new Vetor(0,17.5),buracoNegroEl))
            estadoDoJogo.estrela.existencia = true
        }
        estadoDoJogo.estrela.nivel += 1
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo.estrela.preco
        estadoDoJogo.estrela.preco = estadoDoJogo.estrela.preco * 2
        atualizaClick()
    }
    restauracao()
})
