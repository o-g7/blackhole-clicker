export default class Vetor {//Cria um vetor como um de Física
	constructor(vetorX, vetorY) {//Como em física , todo vetor possui um X e um Y
  	this.x = vetorX;
    this.y = vetorY;
  }
  
  multiplica(valor) {//Mutiplica um vetor
  	return new Vetor(this.x * valor, this.y * valor)
  }
  
  soma(outroVetor) {//Soma com outro  Vetor
  	return new Vetor(this.x + outroVetor.x, this.y + outroVetor.y)
  }
  
  subtrai(outroVetor) {//Soma negativamente com outro Vetor
  	return this.soma(outroVetor.multiplica(-1))
  }
  
  tamanho() {//Pega o tamanho do Vetor na diagonal
  	return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  
  unitario() {//reduz unitariamente
  	return this.multiplica(1/this.tamanho())
  }
}