import Vetor from "./vetor.js"

export class Sprite {//Uma sprite de jogo , que possui uma posição(Vetor com posição x e y), largura , altura...
    constructor(posicao, largura, altura, imagem,velocidade) {
        this.posicao = posicao
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
        this.velocidade = velocidade
    }
        
    desenhando(ctx) {//Desenha o sprite na posição
        ctx.drawImage(this.imagem, this.posicao.x, this.posicao.y, this.largura, this.altura)
    }

    get centro(){//Pega o centro da sprite
        return {
            x: this.posicao.x + this.largura / 2,
            y: this.posicao.y + this.altura / 2
        }
    }

    get radiano(){//Pega o angulo em radiano
        return (this.angulo * 3.14) / 180
    }

    horizonteEventos(outraSprite) {//Verifica se bateu
        let c1 = Math.abs(outraSprite.centro.x - this.centro.x)
        let c2 = Math.abs(outraSprite.centro.y - this.centro.y)
        let h = Math.sqrt(c1 ** 2 + c2 ** 2)
        let r1 = this.altura / 2
        let r2 = outraSprite.altura / 2

        return h <= r1 + r2
    }
}

export class BuracoNegro extends Sprite{//Uma sprite , que agora porém tem massa e angulo de rotação
    constructor(posicao,largura,altura,imagem,massa=1,angulo=0){
        super(posicao,largura,altura,imagem)
        this.massa = massa//Massa pra intensidade docampo gravitacional
        this.angulo = angulo//Para girar
    }

    desenhando(ctx) {
        if (this.imagem) {//Gira a imagem e depois desenha ela, assim parece que esta sempre girando
            ctx.save()
            ctx.translate(this.posicao.x,this.posicao.y)
            ctx.translate(this.largura/2,this.altura/2)
            ctx.rotate(this.radiano)
            ctx.drawImage(this.imagem, -this.largura/2, -this.altura/2, this.largura, this.altura)
            ctx.restore()
        }
    }

    atualizandoBuracoNegro(novaMassa){//Aumenta o campo gravitacional quando necessário e muda o angulo pra girar
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

    desatualizaBuracoNegro(diminuir,novaImagem){//Diminui o Buraco Negro e altera a imagem
        this.largura -= diminuir
        this.altura -= diminuir
        this.imagem = novaImagem
    }
}

export class CorpoCeleste extends Sprite{//Sprite dos corpos celestes tirando Buraco Negro
    constructor(posicao,largura,altura,imagem,velocidade,buracoNegro){
        super(posicao,largura,altura,imagem,velocidade)
        this.buracoNegro = buracoNegro
    }

    atualizaCorposCelestes() {//Atrai eles para o buraco negro da seguinte forma...
        this.posicao = this.posicao.soma(this.velocidade)//Altera a posição relativamente a velocidade do corpo
        let forcaGravitacional = new Vetor(this.buracoNegro.centro.x,this.buracoNegro.centro.y).subtrai(this.posicao).unitario().multiplica(this.buracoNegro.massa)//Faz como se fosse F = m.a , usando a massa do buraco negro e a posição do corpo, que esta alterada pela velocidade, fingindo o campo gravitacional
        this.velocidade = this.velocidade.soma(forcaGravitacional)//Muda a velocidade , conseguentemente a posição seguinte, como um campo gravitacional que puxa as coisas
        
    }

    morrer(posicaoInicial,velocidadeInicial){//Volta a posição original
        this.posicao.x = posicaoInicial.x
        this.posicao.y = posicaoInicial.y
        this.velocidade.x = velocidadeInicial.x
        this.velocidade.y = velocidadeInicial.y
    }
}

