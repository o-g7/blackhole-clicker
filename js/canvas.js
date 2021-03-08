import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"

const ARESTA_CANVAS = 500

let canvas = document.querySelector('#clicker')
let ctx = canvas.getContext('2d')
let massaAtual = 1
let pontoDeSuccao = new Vetor((ARESTA_CANVAS - massaAtual)/3,(ARESTA_CANVAS - massaAtual)/2.5)
let buracoNegroImg = new Image
buracoNegroImg.src = "imgs/blackhole-128.png"
const buracoNegroEl = new BuracoNegro(pontoDeSuccao,128,128,buracoNegroImg,massaAtual)
let imagemTeste = new Image
imagemTeste.src = "imgs/blackhole-32.png"
corposCelestes.push(new CorpoCeleste(new Vetor(-30,-30),32,32,imagemTeste,new Vetor(0,5),buracoNegroEl))

buracoNegroImg.addEventListener('load',()=>{
    desenhaCanvas()
})

function desenhaCanvas(){
    ctx.clearRect(0,0,ARESTA_CANVAS,ARESTA_CANVAS)
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
            corpo.morrer(new Vetor(-30,-30),new Vetor(0,10)) 
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