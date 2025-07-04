
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventario = [
    {
      nombre: 'Torta Chocolate',
      categoria: 'Tortas',
      stock: 2,
      presentacion: 'Unidad',
      ubicacion: 'Vitrina',
      observaciones: 'Alta demanda'
    },
    {
      nombre: 'Tarta Fresa',
      categoria: 'Tartas',
      stock: 10,
      presentacion: 'Unidad',
      ubicacion: 'Vitrina 2',
      observaciones: 'Refrigerada'
    }
  ];
}
