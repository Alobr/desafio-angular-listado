import { Component } from '@angular/core';
import { Estudiante } from '../estudiante.model';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  estudiantes: Estudiante[] = [new Estudiante('Andrea', 'Perez'), new Estudiante('Laura', 'Ruiz'), new Estudiante('Alex', 'Fernandez'), new Estudiante('Lucas', 'Torrez'), new Estudiante('German', 'Suarez'), new Estudiante('Lucia', 'Celis')];
}
