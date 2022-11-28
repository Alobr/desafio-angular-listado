import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  estudiantes = ['Antonio', 'Andrea', 'Lucia', 'German', 'Marianna', 'Carola'];
}
