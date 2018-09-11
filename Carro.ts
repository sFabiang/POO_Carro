export class Carro {
  private gasosa : number;
  private passageiro : number;
  private km : number;

  constructor(gasosa : number, passageiro : number, km : number){
    this.gasosa = gasosa;
    this.passageiro = passageiro;
    this.km = km; 
  }
  public embarcar() : void{
    this.passageiro += 1;
    if(this.passageiro > 2){
      this.passageiro = 2
      console.log("Só cabem 2 pessoas no carro.")
    }
  }
  public desembarcar() : void{
    this.passageiro -= 1;
    if(this.passageiro < 0){
      this.passageiro = 0;
      console.log("Não há niguém no carro.")
    }
  }
  public abastecer(gasosa : number) : void{
    if(this.gasosa + gasosa >= 10)
      this.gasosa = 10; 
    else 
      this.gasosa += gasosa; 
  }
  public andar(km : number) : void{
    if(this.passageiro <= 0)
      console.log("Não há niguém no carro.")
    if(this.gasosa == 0)
      console.log("Carro não pode andar, sem gasosa.")
    if(km > this.gasosa*10)
      console.log("Sem gasosa suficiente para a viagem.")
    if(km < 0)
      console.log("Não dá pra andar negativamente.")
    else
      this.km += km;
      this.gasosa = this.gasosa - km/10;
  }
  public getGasosa(){ 
    return this.gasosa
    }
  public setGasosa(gasosa : number) : void{
    this.gasosa = gasosa
  }
  public getPassageiro(){ 
    return this.passageiro
    }
  public setPassageiro(passageiro : number) : void{
    this.passageiro = passageiro
  }
  public getKm(){ 
    return this.km
    }
  public setKm(km : number) : void{
    this.km = km
  }
  public toString() : string {
		let str : string = "";
		str += "Gasolina: " + this.gasosa + "\n";
	  str += "Número de passageiros: " + this.passageiro + "\n";
    str += "Quilometragem: " + this.km + "\n";
		return str;
  }
}