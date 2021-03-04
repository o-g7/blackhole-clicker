const ARESTA_CANVAS = 500

class Vetor {
	constructor(vetorX, vetorY) {
  	this.x = vetorX;
    this.y = vetorY;
  }
  
  multiplica(valor) {
  	return new Vetor(this.x * valor, this.y * valor)
  }
  
  soma(outroVetor) {
  	return new Vetor(this.x + outroVetor.x, this.y + outroVetor.y)
  }
  
  subtrai(outroVetor) {
  	return this.soma(outroVetor.multiplica(-1))
  }
  
  tamanho() {
  	return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  
  diminuiVetor() {
  	return this.multiplica(1/this.tamanho())
  }
}

class Sprite {
    constructor(posicao, largura, altura, imagem,velocidade,angulo=0) {
        this.posicao = posicao
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
        this.velocidade = velocidade
        this.angulo = angulo
    }
        
    desenhando(ctx) {
        if (this.imagem) {
            ctx.save()
            ctx.translate(this.posicao.x,this.posicao.y)
            ctx.rotate(this.radiano)
            ctx.drawImage(this.imagem, this.largura/2, this.altura/2, this.largura, this.altura)
            ctx.restore()
        }
    }

    get radiano(){
        return (this.angulo * 3.14) / 180
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

class BuracoNegro extends Sprite{
    constructor(posicao,largura,altura,imagem,massa){
        super(posicao,largura,altura,imagem)
        this.massa = massa
    }

    atualizaMassa(novaMassa){
        this.massa = novaMassa
    }
}

class CorpoCeleste extends Sprite{
    constructor(posicao,largura,altura,imagem,velocidade,angulo,buracoNegroEl){
        super(posicao,largura,altura,imagem,velocidade,angulo)
        this.buracoNegro = buracoNegroEl
    }

    atualizaCorposCelestes() {
        this.angulo += this.velocidade
        if(this.angulo>=360){
            this.angulo=1
        }
        this.posicao = this.posicao.soma(this.velocidade)

        let forcaGravitacional = this.buracoNegro.posicao.subtrai(this.posicao).diminuiVetor().mutiplica(this.buracoNegro.massa)
        
        this.velocidade = this.velocidade.soma(forcaGravitacional)
        
    }
}


let canvas = document.querySelector('#clicker')
let ctx = canvas.getContext('2d')
let massaAtual = 10
let pontoDeSuccao = new Vetor((ARESTA_CANVAS - massaAtual)/4,(ARESTA_CANVAS - massaAtual)/4)
let buracoNegroImg = new Image
buracoNegroImg.src = "imgs/blackhole-128.png"
const buracoNegroEl = new BuracoNegro(pontoDeSuccao,128,128,buracoNegroImg,massaAtual)
let corposCelestes = []
let imagemTeste = new Image
imagemTeste.src = "imgs/blackhole-32.png"
corposCelestes.push(new CorpoCeleste(new Vetor(-30,-30),32,32,imagemTeste,new Vetor(2,2),0.2,buracoNegroEl))

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

function ojogo(){
    desenhaCanvas()
    atualizaJogo()
}

setInterval(()=>{
    ojogo()
},33)