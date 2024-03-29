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


let canvas = document.querySelector('#clicker')//Pega o canvas
export const ALTURA_CANVAS = canvas.height = window.innerHeight//Defien a altura e largura do canvas dinamicamente
export const LARGURA_CANVAS = canvas.width = window.innerWidth

let ctx = canvas.getContext('2d')// Canvas 2d
let pontoDeSuccao = new Vetor(LARGURA_CANVAS/2.1,ALTURA_CANVAS/2.8)//Campo gravitacional definição
let intro = true//Carregar página
let video = document.querySelector('video')//Video do final
let antiMateria = document.querySelector('#anti')//Imagem do Condensador

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
export const buracoNegroEl = new BuracoNegro(pontoDeSuccao,127,127,buracoNegroImg.imagem0,aumentoMassa)//Buraco Negro

video.addEventListener('load',()=>{
    buracoNegroImg.imagem0.addEventListener('load',()=>{
        desenhaCanvas()//Para carregar as coisas principais
    })
})

canvas.addEventListener('click',(e)=>{
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            estadoDoJogo.click += estadoDoJogo.valorClick//Click funcioando no exato sprite do buraco negro
            
        }
    }
    atualizaClick()//atualiza as unidades de massa e mais (estadoDoJogo.js)
})

canvas.addEventListener('mousemove',(e)=>{//Se estiver dentro do Buraco Negro e consensador comprado...
    if(e.pageX>=buracoNegroEl.posicao.x && e.pageX<=buracoNegroEl.posicao.x + buracoNegroEl.largura){
        if(e.pageY>=buracoNegroEl.posicao.y && e.pageY<=buracoNegroEl.posicao.y + buracoNegroEl.altura){
            if(estadoDoJogo.antiMateria.existencia) {
                antiMateria.style.display = 'block'//... o condesador aparece ...
                antiMateria.style.left = `${e.pageX-20}px`
                antiMateria.style.top = `${e.pageY-20}px`
            }
        }
    }
    else{
        antiMateria.style.display = 'none'//... ou não
    }
})

async function introAparecer(){//Aparece a logo por 5 segundos
    let introEl = document.querySelector('#intro')
    await espera(5000)
    introEl.style.display = 'none'
    intro = false
}

function desenhaCanvas(){//Movimenta sprites no jogo
    ctx.clearRect(0,0,LARGURA_CANVAS,ALTURA_CANVAS)
    buracoNegroEl.desenhando(ctx)
    for (let corpo of corposCelestes) {
        corpo.desenhando(ctx)
    }
}

function atualizaJogo(){//Verifica tamanho e novos valores de movimento de todos
    buracoNegroEl.atualizandoBuracoNegro(aumentoMassa)
    for (let corpo of corposCelestes) {
        corpo.atualizaCorposCelestes()
    }
}

function engoleCorpos(){//Verifica colisões e ganha massa dependendo do corpo colidido
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

function espera(tempo){//Função para esperar um tempo
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),tempo)
    })
}  

async function horaDaMorte(){// Clicou no botão final
    let tempoFinal = Date.now()
    let tempoTotal = (tempoFinal - estadoDoJogo.tempo)/60000//Pega e calcula quanto tempo foi gasto na página
    corposCelestes.splice(0,corposCelestes.length)//Mata os corpos celeste

    desenhaCanvas()
    atualizaClick()//Altera o canvas e o click depois de ter tirado tudo
    clearInterval(Intervalo)//Limpa o intervalo
    localStorage.clear()//Deleta o save

    document.querySelector('#massa').innerHTML = 'undefined'//Escreve indefined e ERROR nos botões
    document.querySelector('h1').innerHTML = 'ERROR'

    let audio = new Audio('audio/Alerta.mp3')
    audio.addEventListener('canplaythrough',() => {//Toca o áudio no volume de 20% depois de verificar se pode tocar
        audio.play()
        audio.volume = 0.2
    })

    for (let numeroBotao = 0; numeroBotao < botoesEl.length; numeroBotao++) {//Remove botão por botão com intervalo de 1 segundo
        botoesEl[numeroBotao].innerHTML = `<div></div><p>ERROR: undefined</p><p id="Valor">ERROR: undefined</p>`
        await espera(1000) 
        botoesEl[numeroBotao].classList.add('desligado')
    }

    await espera(1000)
    //Some as escritas laterais
    document.querySelector('#esquerda').style.display = 'none'
    document.querySelector('#direita').style.display = 'none'
    
    for (let numeroBuraco = 1; numeroBuraco <7 ; numeroBuraco++) {//Muda imagem do buraco negro para buraco branco
        let imagem = `imagem${numeroBuraco}`
        await espera(1000) 
        buracoNegroEl.desatualizaBuracoNegro(25, buracoNegroImg[imagem])
        desenhaCanvas() 
    }

    document.querySelector('body').style.backgroundImage = 'none'
    document.querySelector('body').style.animationName = 'none'

    await espera(2000) 
    ctx.clearRect(0,0,LARGURA_CANVAS,ALTURA_CANVAS)//Deleta tudo

    canvas.style.display = 'none'
    await espera(1000)
    
    video.style.display = 'block'//vídeo aparece e toca
    video.style.zIndex = '3'
    video.play()
    await espera(33000)

    let nomeUsuario = window.prompt('Qual o seu nome?', '') //Pega nome do usuário
    let informacoes = { nomeUsuario, tempoTotal } //Coloca as informações que vão pro Back-End em um objeto
    fetch('https://backend-blackhole-clicker.herokuapp.com/leaderboard', { //Dá um fetch pra mandar as coisas pro Back-End
        body: JSON.stringify(informacoes),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })
    .then(() => location.href = 'credito.html') //Após mandar os dados para o Back-End, ele redireciona para a página de créditos.
}

function ojogo(){//O jogo com todas suas funcionalidades sendo chamadas de 33 em 33 milesegundos
    if(intro){//Aparece a intro quando entra...
        introAparecer()
    }
    else{//Depois o jogo funciona normalmente
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