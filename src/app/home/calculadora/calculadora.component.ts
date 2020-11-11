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

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "O resultado foi de:",
      message: `${this.numero1 + this.numero2}`,
      buttons: ["OK"]
    });

    await alert.present();
  }

  ngOnInit() {}

  vaiFormularioOld() {
    console.log(this.numero1 + this.numero2);
  }
}
