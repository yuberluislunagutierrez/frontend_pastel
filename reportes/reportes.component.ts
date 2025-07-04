

import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  ventasLabels: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  ventasData = {
    labels: this.ventasLabels,
    datasets: [
      {
        label: 'Ventas S/',
        data: [100, 200, 150, 300, 350],
        backgroundColor: '#ffd700'
      }
    ]
  };
}
