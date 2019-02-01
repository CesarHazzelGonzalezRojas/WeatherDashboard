import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {
  codigoPostal = '850002';
  unidades = 'M';
  scale;
  city;
  ciudadSeleccionada: string = '0';
  escalaSeleccionada: string = '0';
  verCiudad: string = 'Obregon';
  verEscala: string = '';

  constructor() {
    this.city = ['Obregon', 'Navojoa', 'Nogales', 'Hermosillo'];
    this.scale = ['Celsius','Farenhein'];
  }

  capturar() {
    this.verCiudad = this.ciudadSeleccionada;
    if (this.ciudadSeleccionada === 'Obregon') {
      this.codigoPostal = '850002';
    }
    else if (this.ciudadSeleccionada === 'Navojoa') {
      this.codigoPostal = '852252';
    }
    else if (this.ciudadSeleccionada === 'Nogales') {
      this.codigoPostal = '840002';
    }
    else if (this.ciudadSeleccionada === 'Hermosillo'){
      this.codigoPostal = '830002';
    }
    else {
      this.codigoPostal = '0';
    }
    this.verEscala = this.escalaSeleccionada;
    if (this.escalaSeleccionada === 'Farenhein') {
      this.unidades = 'I';
    }
    else {
      this.unidades = 'M';
    }
  }
   

  public lineChartData: Array<any> = [
    { data: [23.8, 59, 80, 81, 56, 55, 40], label: 'Weather' },
  ];
  public lineChartLabels: Array<any> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

}
