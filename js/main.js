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
    estadoDoJogo.precos = estadoRecuperado.estadoFinal.precos
    estadoDoJogo.niveis = estadoRecuperado.estadoFinal.niveis
    estadoDoJogo.existencia = estadoRecuperado.estadoFinal.existencia
    restauracao()
    upgradeBuracoNegro()
    atualizaContador()
}
