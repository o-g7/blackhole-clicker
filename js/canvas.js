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
                ctx.rotate(angulo)
                ctx.drawImage(this.imagem, this.largura/2, this.altura/2, this.largura, this.altura)
                ctx.restore()
            }
        }
        get centro(){
            return {
                x: this.x + this.largura / 2,
                y: this.y + this.altura / 2
            }
        }
        batercom(outraSprite) {
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
    andar(){   
    }
    morrer(){
    }
}

class Meteoro extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    andar(){   
    }
    morrer(){
    }
}

class Lua extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    andar(){   
    }
    morrer(){
    }
}

class Planetinha extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    andar(){   
    }
    morrer(){
    }
}

class Planeta extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    andar(){   
    }
    morrer(){
    }
}

class Estrela extends Sprite{
    constructor(){
        super(x,y,largura,altura,imagemDoCorpo,velocidadeDoCorpo,angulo)
    }
    andar(){   
    }
    morrer(){
    }
}



let canvas = document.querySelector('#clicker')
let ctx = canvas.getContext('#2d')
let buracoNegroImg = new Image()
buracoNegroImg.src = "imgs/buracoNegor.png"

function desenhaCanvas(){
    ctx.clearRect(0,0,400,700)
}

function sugando(){
}

function sugado(){
}

function ojogo(){
}

setInterval(ojogo,33)