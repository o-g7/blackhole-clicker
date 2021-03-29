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

// objeto de boleano para identificar se ja inseriu as imagens no canvas
let primeiroPush = {
    meteoro: false,
    lua: false,
    anao: false,
    planeta: false,
    estrela: false
}

// cria/restaura os botoes com os niveis e valores corretos e ainda insere as imagens no canvas caso n inseriu
export function restauracao(){
    // mude os valores dos botoes
    botoesEl[0].innerHTML = `<div></div><p>Poder do Meteoro: ${estadoDoJogo.meteoro.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.meteoro.preco.toLocaleString()}</p>`
    botoesEl[1].innerHTML = `<div></div><p>Condensador de Antimatéria: ${estadoDoJogo.antiMateria.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.antiMateria.preco.toLocaleString()}</p>`
    botoesEl[2].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Lunar: ${estadoDoJogo.lua.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.lua.preco.toLocaleString()}</p>`
    botoesEl[3].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder do Planeta Anão: ${estadoDoJogo.anao.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.anao.preco.toLocaleString()}</p>`
    botoesEl[4].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Planetar: ${estadoDoJogo.planeta.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.planeta.preco.toLocaleString()}</p>`
    botoesEl[5].innerHTML = `<div><p>--EM CONSTRUÇÃO--</p></div><p>Poder Estrelar: ${estadoDoJogo.estrela.nivel}</p><p id="Valor">Valor: ${estadoDoJogo.estrela.preco.toLocaleString()}</p>`
    
    // insere as imagens no canvas caso precisam existir e ainda n foi inserido
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

function powerUp(corpo){//Muda o botão e o poder do corpo, de acordo com qual corpo é passado a ela
    if(estadoDoJogo.click>=estadoDoJogo[corpo].preco){//verifica se pode comprar
        if(!estadoDoJogo[corpo].existencia){
            estadoDoJogo[corpo].existencia = true//Agora passa a existir
        }
        estadoDoJogo.click = estadoDoJogo.click - estadoDoJogo[corpo].preco
        estadoDoJogo[corpo].preco = estadoDoJogo[corpo].preco * 2
        estadoDoJogo[corpo].nivel += 1//Muda o preço e o nível
        atualizaClick()//Decrementa o click
    }
    restauracao()//Chama a função de escrita e existencia
}

botoesEl[0].addEventListener('click', () => {//Manda para o corpo certo para a powerUp , essa função  chama o corpo meteoro e seu botão por exemplo
    const corpoB1 = 'meteoro'
    powerUp(corpoB1)
})


botoesEl[1].addEventListener('click',() => {
    if(estadoDoJogo.click>=estadoDoJogo.antiMateria.preco){//Verifica se pode comprar
        if(!estadoDoJogo.antiMateria.existencia){
            estadoDoJogo.antiMateria.existencia = true
        }
        estadoDoJogo.antiMateria.nivel += 1
        estadoDoJogo.valorClick = estadoDoJogo.antiMateria.nivel * 2
        estadoDoJogo.click =estadoDoJogo.click - estadoDoJogo.antiMateria.preco
        estadoDoJogo.antiMateria.preco = estadoDoJogo.antiMateria.preco * 2//Muda o valor do click , o preço seguinte e o nível
        atualizaClick()
    }
    restauracao()
})    


botoesEl[2].addEventListener('click',()=>{//... dessa forma , essa função  chama o corpo lua e seu botão
    const corpoB2 = 'lua'
    powerUp(corpoB2)
})

botoesEl[3].addEventListener('click',()=>{//... dessa forma , essa função  chama o corpo planeta anao e seu botão
    const corpoB3 = 'anao'
    powerUp(corpoB3)
})

botoesEl[4].addEventListener('click',()=>{//... dessa forma , essa função  chama o corpo planeta e seu botão
    const corpoB4 = 'planeta'
    powerUp(corpoB4)
})

botoesEl[5].addEventListener('click',()=>{//... dessa forma , essa função  chama o corpo estrela e seu botão
    const corpoB5 = 'estrela'
    powerUp(corpoB5)
})

botoesEl[6].addEventListener('click',()=>{
    if(estadoDoJogo.click>=estadoDoJogo.bigBang.preco){//Verifica se pode comprar
        estadoDoJogo.click -= estadoDoJogo.bigBang.preco
        estadoDoJogo.bigBang.chegouHora = true//Começa o fim do jogo
    }
})