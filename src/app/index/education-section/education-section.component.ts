import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css', '../../../assets/css/global.css']
})
export class EducationSectionComponent {
  listaDeEstudios: any[] = 
  [{tittle: "TSU EN TIC’S", school: "UNIVERSIDAD TECNOLÓGICA DE PUEBLA ", years: "2019-2021", img: "../../../assets/img/TICS.webp"},
   {tittle: "ING. EN DESARROLLO Y GESTIÓN DE SOFTWARE", school: "UNIVERSIDAD TECNOLÓGICA DE PUEBLA ", years: "2019-2023",  img: "../../../assets/img/gestionDeSoftware.webp"}];
}
