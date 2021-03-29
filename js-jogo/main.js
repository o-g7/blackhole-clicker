import "./canvas.js"
import { atualizaContador, estadoDoJogo, upgradeBuracoNegro } from "./estadoDoJogo.js"
import "./powerups.js"
import {botoesEl} from "./estadoDoJogo.js"
import {restauracao} from "./powerups.js"
const estadoRecuperado = { //Recuperar o estado do jogo salvo em um objeto
    estadoFinal: JSON.parse(localStorage.getItem('estadoFinal'))
}

//Se ainda não mudou o que foi recuperado
if (estadoRecuperado.estadoFinal){
    //Mude as coisas para o valor recuperado
    estadoDoJogo.click = estadoRecuperado.estadoFinal.click
    estadoDoJogo.valorClick = estadoRecuperado.estadoFinal.valorClick
    estadoDoJogo.meteoro = estadoRecuperado.estadoFinal.meteoro
    estadoDoJogo.antiMateria = estadoRecuperado.estadoFinal.antiMateria
    estadoDoJogo.lua = estadoRecuperado.estadoFinal.lua
    estadoDoJogo.anao = estadoRecuperado.estadoFinal.anao
    estadoDoJogo.planeta = estadoRecuperado.estadoFinal.planeta
    estadoDoJogo.estrela = estadoRecuperado.estadoFinal.estrela
    estadoDoJogo.tempo = estadoRecuperado.estadoFinal.tempo
    restauracao() //Chama funcao
    upgradeBuracoNegro() //Chama funcao
    atualizaContador() //Chama funcao
}
