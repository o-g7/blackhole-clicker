import "./canvas.js"
import { atualizaContador, estadoDoJogo, upgradeBuracoNegro } from "./estadoDoJogo.js"
import "./powerups.js"
import {botoesEl} from "./estadoDoJogo.js"
import {restauracao} from "./powerups.js"

const estadoRecuperado = {
    estadoFinal: JSON.parse(localStorage.getItem('estadoFinal'))
}

if (estadoRecuperado.estadoFinal){
    estadoDoJogo.click = estadoRecuperado.estadoFinal.click
    estadoDoJogo.valorClick = estadoRecuperado.estadoFinal.valorClick
    estadoDoJogo.meteoro = estadoRecuperado.estadoFinal.meteoro
    estadoDoJogo.antiMateria = estadoRecuperado.estadoFinal.antiMateria
    estadoDoJogo.lua = estadoRecuperado.estadoFinal.lua
    estadoDoJogo.anao = estadoRecuperado.estadoFinal.anao
    estadoDoJogo.planeta = estadoRecuperado.estadoFinal.planeta
    estadoDoJogo.estrela = estadoRecuperado.estadoFinal.estrela
    restauracao()
    upgradeBuracoNegro()
    atualizaContador()
}
