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
        ctx.drawImage(this.imagem, this.posicao.x, this.posicao.y, this.largura, this.altura)
    }

    get centro(){
        return {
            x: this.posicao.x + this.largura / 2,
            y: this.posicao.y + this.altura / 2
        }
    }

    get radiano(){
        return (this.angulo * 3.14) / 180
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
    constructor(posicao,largura,altura,imagem,massa=1,angulo=0){
        super(posicao,largura,altura,imagem)
        this.massa = massa
        this.angulo = angulo
    }

    desenhando(ctx) {
        if (this.imagem) {
            ctx.save()
            ctx.translate(this.posicao.x,this.posicao.y)
            ctx.translate(this.largura/2,this.altura/2)
            ctx.rotate(this.radiano)
            ctx.drawImage(this.imagem, -this.largura/2, -this.altura/2, this.largura, this.altura)
            ctx.restore()
        }
    }

    atualizandoBuracoNegro(novaMassa){
        if (novaMassa != this.massa){
            this.massa = novaMassa
            this.largura += novaMassa*10
            this.altura += novaMassa*10
        }
        this.angulo += 1
        if(this.angulo>=360){
            this.angulo -= 360
        }
    }

    desatualizaBuracoNegro(diminuir,novaImagem){
        this.largura -= diminuir
        this.altura -= diminuir
        this.imagem = novaImagem
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

