import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"]
})
export class CalculadoraComponent implements OnInit {
  private numero1: number;
  private numero2: number;
  private operacao: string;

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "O resultado foi de:",
      message: `${this.calc()}`,
      buttons: ["OK"]
    });
    await alert.present();

    console.log(this.operacao);
  }

  calc() {
    let total = 0;
    switch(this.operacao) {
      case "sum": total = this.numero1 + this.numero2; break;
      case "sub": total = this.numero1 - this.numero2; break;
      case "mult": total = this.numero1 * this.numero2; break;
      case "div": total = this.numero1 / this.numero2; break;
    }
    return total;
  }

  ngOnInit() {}

  vaiFormularioOld() {
    console.log(this.numero1 + this.numero2);
  }
}
