import {corposCelestes} from "./estadoDoJogo.js"
import Vetor from "./vetor.js"
import {BuracoNegro} from "./sprite.js"
import {CorpoCeleste} from "./sprite.js"
import {botoesEl} from "./estadoDoJogo.js"
import {estadoDoJogo} from "./estadoDoJogo.js"
import {atualizaClick} from "./estadoDoJogo.js"
import {imagens} from "./estadoDoJogo.js"
import {aumentoMassa} from "./estadoDoJogo.js"
import {atualizaContador} from "./estadoDoJogo.js"


let canvas = document.querySelector('#clicker')
export const ALTURA_CANVAS = canvas.height = window.innerHeight
export const LARGURA_CANVAS = canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')
let pontoDeSuccao = new Vetor(LARGURA_CANVAS/2.1,ALTURA_CANVAS/2.8)
let intro = true
let video = document.querySelector('video')
let antiMateria = document.querySelector('#anti')

let buracoNegroImg = {
    imagem0 : new Image,
    imagem1 : new Image,
    imagem2 : new Image,
    imagem3 : new Image,
    imagem4 : new Image,
    imagem5 : new Image,
    imagem6 : new Image
}
buracoNegroImg.imagem0.src = "imgs/blackhole-128.png"
buracoNegroImg.imagem1.src = "imgs/Whitehole_sprite_1.png"
buracoNegroImg.imagem2.src = "imgs/Whitehole_sprite_2.png"
buracoNegroImg.imagem3.src = "imgs/Whitehole_sprite_3.png"
buracoNegroImg.imagem4.src = "imgs/Whitehole_sprite_4.png"
buracoNegroImg.imagem5.src = "imgs/Whitehole_sprite_5.png"
buracoNegroImg.imagem6.src = "imgs/Whitehole_sprite.png"
export const buracoNegroEl = new BuracoNegro(pontoDeSuccao,127,127,buracoNegroImg.imagem0,aumentoMassa)

video.addEventListener('load',()=>{
    buracoNegroImg.imagem0.addEventListener('load',()=>{
        desenhaCanvas()
    })
})

canvas.addEventListener('click',(e)=>{
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            estadoDoJogo.click += estadoDoJogo.valorClick
            
        }
    }
    atualizaClick()
})

canvas.addEventListener('mousemove',(e)=>{
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            if(estadoDoJogo.antiMateria.existencia) {
                antiMateria.style.display = 'block'
                antiMateria.style.left = `${e.pageX-20}px`
                antiMateria.style.top = `${e.pageY-20}px`
            }
        }
    }
    else{
        antiMateria.style.display = 'none'
    }
})

async function introAparecer(){
    let introEl = document.querySelector('#intro')
    await espera(5000)
    introEl.style.display = 'none'
    intro = false
}

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
                estadoDoJogo.click += estadoDoJogo.meteoro.preco/10
                atualizaClick()
            }
            if(corpo.imagem === imagens.lua){
                corpo.morrer(new Vetor(LARGURA_CANVAS * -0.9,ALTURA_CANVAS * -0.9),new Vetor(4,6)) 
                estadoDoJogo.click += estadoDoJogo.lua.preco/8
                atualizaClick()
            }
            if(corpo.imagem === imagens.anao){
                corpo.morrer(new Vetor(LARGURA_CANVAS ,ALTURA_CANVAS ),new Vetor(0,10)) 
                estadoDoJogo.click += estadoDoJogo.anao.preco/5
                atualizaClick()
            }
            if(corpo.imagem === imagens.planeta){
                corpo.morrer(new Vetor(LARGURA_CANVAS ,ALTURA_CANVAS * -0.9 ),new Vetor(0,17.5)) 
                estadoDoJogo.click += estadoDoJogo.planeta.preco/4
                atualizaClick()
            }
            if(corpo.imagem === imagens.estrela){
                corpo.morrer(new Vetor(LARGURA_CANVAS * 1.7,ALTURA_CANVAS * -1.7),new Vetor(0,17.5)) 
                estadoDoJogo.click += estadoDoJogo.estrela.preco/2
                atualizaClick() 
            }
       }
    }
}

function espera(tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),tempo)
    })
}  

async function horaDaMorte(){
    let tempoFinal = Date.now()
    let tempoTotal = (tempoFinal - estadoDoJogo.tempo)/60000
    corposCelestes.splice(0,corposCelestes.length)

    desenhaCanvas()
    atualizaClick()
    clearInterval(Intervalo)
    /* localStorage.clear() */

    document.querySelector('#massa').innerHTML = 'undefined'
    document.querySelector('h1').innerHTML = 'ERROR'

    let audio = new Audio('audio/Alerta.mp3')
    audio.addEventListener('canplaythrough',() => {
        audio.play()
    })

    for (let numeroBotao = 0; numeroBotao < botoesEl.length; numeroBotao++) {
        botoesEl[numeroBotao].innerHTML = `<div></div><p>ERROR: undefined</p><p id="Valor">ERROR: undefined</p>`
        await espera(1000)
        botoesEl[numeroBotao].classList.add('desligado')
    }

    await espera(1000)
    document.querySelector('#esquerda').style.display = 'none'
    document.querySelector('#direita').style.display = 'none'
    
    for (let numeroBuraco = 1; numeroBuraco <7 ; numeroBuraco++) {
        let imagem = `imagem${numeroBuraco}`
        await espera(1000)
        buracoNegroEl.desatualizaBuracoNegro(25, buracoNegroImg[imagem])
        desenhaCanvas() 
    }

    document.querySelector('body').style.backgroundImage = 'none'
    document.querySelector('body').style.animationName = 'none'

    await espera(2000)
    ctx.clearRect(0,0,LARGURA_CANVAS,ALTURA_CANVAS)

    canvas.style.display = 'none'
    await espera(1000)
    
    video.style.display = 'block'
    video.style.zIndex = '3'

    video.play()
    await espera(33000)
    let nomeUsuario = window.prompt('Qual o seu nome?','undefined')
    let informacoes = { nomeUsuario, tempoTotal }
    fetch('https://backend-blackhole-clicker.herokuapp.com/leaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(informacoes)
    })

    location.href = 'credito.html'
}

function ojogo(){
    if(intro){
        introAparecer()
    }
    else{
        desenhaCanvas()
        atualizaJogo()
        engoleCorpos()
        if(estadoDoJogo.bigBang.chegouHora === true){
            horaDaMorte()
        }
    }
}

let Intervalo = setInterval(() => {
    ojogo()
},33)