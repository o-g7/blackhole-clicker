export default class Vetor {
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
  
  unitario() {
  	return this.multiplica(1/this.tamanho())
  }
}