
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: any[] = [];

  nuevoCliente = {
    nombre: '',
    dni: '',
    telefono: ''
  };

  agregarCliente() {
    if (this.nuevoCliente.nombre && this.nuevoCliente.dni) {
      this.clientes.push({ ...this.nuevoCliente });
      this.nuevoCliente = { nombre: '', dni: '', telefono: '' };
    } else {
      alert("Nombre y DNI son obligatorios");
    }
  }
}
