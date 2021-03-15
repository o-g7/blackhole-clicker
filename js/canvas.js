import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {estadoDoJogo} from "./estadoDoJogo.js"
import {atualizaClick} from "./estadoDoJogo.js"
import {imagens} from "./estadoDoJogo.js"
import {aumentoMassa} from "./estadoDoJogo.js"

let canvas = document.querySelector('#clicker')
export const ALTURA_CANVAS = canvas.height = window.innerHeight
export const LARGURA_CANVAS = canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')
let pontoDeSuccao = new Vetor(LARGURA_CANVAS/2.1,ALTURA_CANVAS/2.8)
let buracoNegroImg = new Image
buracoNegroImg.src = "imgs/blackhole-128.png"
export const buracoNegroEl = new BuracoNegro(pontoDeSuccao,127,127,buracoNegroImg,aumentoMassa)



buracoNegroImg.addEventListener('load',()=>{
    desenhaCanvas()
})

canvas.addEventListener('click',(e)=>{
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            estadoDoJogo.click += 100000
        }
    }
    atualizaClick()
})

function desenhaCanvas(){
    ctx.clearRect(0,0,LARGURA_CANVAS,ALTURA_CANVAS)
    buracoNegroEl.desenhando(ctx)
    for (let corpo of corposCelestes) {
        corpo.desenhando(ctx)
    }
}

function atualizaJogo(){
    buracoNegroEl.atualizandoBuracoNegro(aumentoMassa)
    for (let corpo of corposCelestes) {
        corpo.atualizaCorposCelestes()
    }
}

function engoleCorpos(){
    for (let corpo of corposCelestes) {
        const atingiuBuracoNegro = corpo.horizonteEventos(buracoNegroEl)
        if (atingiuBuracoNegro) {
            if(corpo.imagem === imagens.meteoro){
                corpo.morrer(new Vetor(LARGURA_CANVAS * -0.1,ALTURA_CANVAS * -0.1),new Vetor(1,4)) 
                estadoDoJogo.click += estadoDoJogo.meteoro.preco/2
                atualizaClick()
            }
            if(corpo.imagem === imagens.lua){
                corpo.morrer(new Vetor(LARGURA_CANVAS * -0.9,ALTURA_CANVAS * -0.9),new Vetor(4,6)) 
                estadoDoJogo.click += estadoDoJogo.lua.preco/2.5
                atualizaClick()
            }
            if(corpo.imagem === imagens.anao){
                corpo.morrer(new Vetor(LARGURA_CANVAS ,ALTURA_CANVAS ),new Vetor(0,10)) 
                estadoDoJogo.click += estadoDoJogo.anao.preco/4
                atualizaClick()
            }
            if(corpo.imagem === imagens.planeta){
                corpo.morrer(new Vetor(LARGURA_CANVAS ,ALTURA_CANVAS * -0.9 ),new Vetor(0,17.5)) 
                estadoDoJogo.click += estadoDoJogo.planeta.preco/4.5
                atualizaClick()
            }
            if(corpo.imagem === imagens.estrela){
                corpo.morrer(new Vetor(LARGURA_CANVAS ,ALTURA_CANVAS * -0.9 ),new Vetor(0,17.5)) 
                estadoDoJogo.click += estadoDoJogo.estrela.preco/5
                atualizaClick() 
            }
       }
    }
}

export function ojogo(){
    desenhaCanvas()
    atualizaJogo()
    engoleCorpos()
}

setInterval(()=>{
    ojogo()
},33)