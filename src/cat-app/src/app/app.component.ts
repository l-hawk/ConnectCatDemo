import { Component } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';
//import { CatService } from './cats.service';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <div>
      <button (click)="onClick()">  Get me some cats</button>
    </div>
    <ul>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat App';
  
  onClick(): void{
    this.title = 'clicked';
    
  }
}

