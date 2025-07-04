import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  productos = [
    { nombre: 'Torta Chocolate', precio: 45, imagen: 'assets/img/torta.png' },
    { nombre: 'Tarta de Fresa', precio: 35, imagen: 'assets/img/fresa.png' }
  ];

  carrito: any[] = [];

  agregarAlCarrito(producto: any) {
    const existe = this.carrito.find(p => p.nombre === producto.nombre);
    if (existe) {
      existe.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  calcularTotal(): number {
    return this.carrito.reduce((suma, p) => suma + (p.precio * p.cantidad), 0);
  }

  finalizarVenta() {
    alert('Venta realizada con éxito. Total: S/ ' + this.calcularTotal());
    this.carrito = [];
  }
}
