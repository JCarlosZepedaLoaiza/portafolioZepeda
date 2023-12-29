import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../assets/css/global.css']
})
export class HeaderComponent {
  proyectos: string[] = ['SIIUTP', 'JAC', 'FISI-ABU', 'Clinica Dental'];
}
