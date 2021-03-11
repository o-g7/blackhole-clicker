import Vetor from "./vetor.js"

export class Sprite {
    constructor(posicao, largura, altura, imagem,velocidade) {
        this.posicao = posicao
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
        this.velocidade = velocidade
    }
        
    desenhando(ctx) {
        if (this.imagem) {
            ctx.drawImage(this.imagem, this.posicao.x, this.posicao.y, this.largura, this.altura)
        }
    }

    
    get centro(){
        return {
            x: this.posicao.x + this.largura / 2,
            y: this.posicao.y + this.altura / 2
        }
    }

    horizonteEventos(outraSprite) {
        let c1 = Math.abs(outraSprite.centro.x - this.centro.x)
        let c2 = Math.abs(outraSprite.centro.y - this.centro.y)
        let h = Math.sqrt(c1 ** 2 + c2 ** 2)
        let r1 = this.altura / 2
        let r2 = outraSprite.altura / 2

        return h <= r1 + r2
    }
}

export class BuracoNegro extends Sprite{
    constructor(posicao,largura,altura,imagem,massa=1){
        super(posicao,largura,altura,imagem)
        this.massa = massa
    }

    atualizandoBuracoNegro(novaMassa){
        this.massa = novaMassa
        this.largura += novaMassa*10
        this.altura += novaMassa*10
        
    }
}

export class CorpoCeleste extends Sprite{
    constructor(posicao,largura,altura,imagem,velocidade,buracoNegro){
        super(posicao,largura,altura,imagem,velocidade)
        this.buracoNegro = buracoNegro
    }

    atualizaCorposCelestes() {
        this.posicao = this.posicao.soma(this.velocidade)
        let forcaGravitacional = new Vetor(this.buracoNegro.centro.x,this.buracoNegro.centro.y).subtrai(this.posicao).unitario().multiplica(this.buracoNegro.massa)
        this.velocidade = this.velocidade.soma(forcaGravitacional)
        
    }

    morrer(posicaoInicial,velocidadeInicial){
        this.posicao.x = posicaoInicial.x
        this.posicao.y = posicaoInicial.y
        this.velocidade.x = velocidadeInicial.x
        this.velocidade.y = velocidadeInicial.y
    }
}

