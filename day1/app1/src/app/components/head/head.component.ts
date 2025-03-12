import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  showMessage = true;
  message = "Conditional rendering with *ngIf";
  //two
  items = [
    { name: 'Angular', type: 'Framework' },
    { name: 'React', type: 'Library' },
    { name: 'Vue', type: 'Framework' }
  ]
}
