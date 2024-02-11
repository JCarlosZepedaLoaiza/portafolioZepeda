import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-study',
  templateUrl: './card-study.component.html',
  styleUrls: ['./card-study.component.css' , '../../../../assets/css/global.css']
})
export class CardStudyComponent {
  @Input() estudios?: any[];
}
