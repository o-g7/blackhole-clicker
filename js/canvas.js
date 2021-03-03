const LARGURA_CANVAS = 400
const ALTURA_CANVAS = 600

class Sprite {
    constructor(x, y, largura, altura, imagem,velocidade,angulo=0) {
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.imagem = imagem
        this.velocidade = velocidade
        this.angulo = angulo
    }
        
    desenhando(ctx) {
        if (this.imagem) {
            ctx.save()
            ctx.translate(this.x,this.y)
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
            x: this.x + this.largura / 2,
            y: this.y + this.altura / 2
        }
    }

    atualizaSprite() {
        this.angulo += this.velocidade
        if(this.angulo>=360){
            this.angulo=1
        }
        this.y += this.velocidade
        if(this.y>ALTURA_CANVAS){
            this.y = 0
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
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    atualizaSprite(){  
        this.angulo += this.velocidade
        if(this.angulo>=360){
            this.angulo=1
        }
    }
}

class Meteoro extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }

    atualizaSprite(){   
    }

    morrer(){
    }
}

class Lua extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }

    atualizaSprite(){   
    }

    morrer(){
    }
}

class Planetinha extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }

    atualizaSprite(){   
    }

    morrer(){
    }
}

class Planeta extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }

    atualizaSprite(){   
    }

    morrer(){
    }
}

class Estrela extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }

    atualizaSprite(){   
    }

    morrer(){
    }
}



let canvas = document.querySelector('#clicker')
let ctx = canvas.getContext('#2d')

let buracoNegroImg = new Image()
buracoNegroImg.src = "imgs/blackhole-32.png"
let buracoNegro = new Sprite(150,200,100,100,buracoNegroImg,5)

function desenhaCanvas(){
    ctx.clearRect(0,0,400,600)
    buracoNegro.desenhando(ctx)
}

function sugando(){
}

function sugado(){
}

function ojogo(){
}

setInterval(ojogo,33)