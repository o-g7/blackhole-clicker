import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {estadoDoJogo} from "./estadoDoJogo.js"
import {preco} from "./estadoDoJogo.js"
import {aumentarUnidadeMassa} from "./estadoDoJogo.js"

let canvas = document.querySelector('#clicker')
export const ALTURA_CANVAS = canvas.height = window.innerHeight
export const LARGURA_CANVAS = canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')
let massaAtual = 1 + estadoDoJogo.aumentoMassa
let pontoDeSuccao = new Vetor((LARGURA_CANVAS - massaAtual)/2.1,(ALTURA_CANVAS - massaAtual)/2.8)
let buracoNegroImg = new Image
buracoNegroImg.src = "imgs/blackhole-128.png"
export const buracoNegroEl = new BuracoNegro(pontoDeSuccao,127+massaAtual,127+massaAtual,buracoNegroImg,massaAtual)


buracoNegroImg.addEventListener('load',()=>{
    desenhaCanvas()
})

canvas.addEventListener('click',(e)=>{
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            estadoDoJogo.click+= estadoDoJogo.valorClick
        }
    }
    aumentarUnidadeMassa()
})

function desenhaCanvas(){
    ctx.clearRect(0,0,LARGURA_CANVAS,ALTURA_CANVAS)
    buracoNegroEl.desenhando(ctx)
    for (let corpo of corposCelestes) {
        corpo.desenhando(ctx)
    }
}

function atualizaJogo(){
    for (let corpo of corposCelestes) {
        corpo.atualizaCorposCelestes()
    }
}

function engoleCorpos(){
    for (let corpo of corposCelestes) {
        const atingiuBuracoNegro = corpo.horizonteEventos(buracoNegroEl)
        if (atingiuBuracoNegro) {
            corpo.morrer(new Vetor(LARGURA_CANVAS * -0.1,ALTURA_CANVAS * -0.1),new Vetor(0,4)) 
            estadoDoJogo.click += preco.meteoro/2
            aumentarUnidadeMassa()
       }
    }
}

function ojogo(){
    desenhaCanvas()
    atualizaJogo()
    engoleCorpos()
}

setInterval(()=>{
    ojogo()
},33)