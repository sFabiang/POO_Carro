export class Carro{
  private gasosa : number;
  private passageiro : number;
  private km : number;

  constructor(gasosa : number, passageiro : number, km : number){
    this.gasosa = gasosa;
    this.passageiro  = passageiro;
    this.km = km; 
  }
  public embarcar(passageiro : number) : void{
    if(this.passageiro + passageiro > 2){
      this.passageiro = 2
      console.log("Só cabem 2 pessoas no carro.")
    }
    else
    this.passageiro+=passageiro;
  }
  public desembarcar(passageiro : number) : void{
    if(this.passageiro - passageiro < 0)
      console.log("Só pode haver 1 ou 2 pessoas no carro.")
    else
    this.passageiro -= passageiro;
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
} 