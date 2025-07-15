import { Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-filtros-component',
  imports: [FormsModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './filtros-component.html',
  styleUrl: './filtros-component.css'
})
export class FiltrosComponent {
  codigo_solicitud_rh = new FormControl('');
  codigosList: string[] = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 5', 'Opción 6', 'Opción 7', 'Opción 8', 'Opción 9', 'Opción 10'];

  codigo_proyecto = new FormControl('');
  codigos_proyectosList: string[] = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 5', 'Opción 6', 'Opción 7', 'Opción 8', 'Opción 9', 'Opción 10'];
  

}
