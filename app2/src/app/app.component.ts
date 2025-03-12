import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { ReverseStringPipe } from './components/head/reverse-string-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeadComponent,ReverseStringPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
  isHighlighted=false
  toggleHighlight(){
    this.isHighlighted=!this.isHighlighted;
  }
  //
  users=['charlie','alice','bob'];
  sortUsers(){
    this.users.sort();
  }
}
