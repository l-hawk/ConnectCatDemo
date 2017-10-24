import { Component } from '@angular/core';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <div>
      <button (click)="onClick()">  Get me some cats</button>
    </div>
    <ul>
      <li *ngFor="let cat of cats">
        <img [src]='cat.images.fixed_width.url' (click)="onSelect(cat)"/>
      </li>
    </ul>
    <div>
      <img [src]='Poweredby_100px-Black_VertLogo.png' alt='Giphy logo' />
     </div> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cat App';
  catsService: CatsService;
  cats: string[];

  constructor(catsService: CatsService) {
    this.catsService = catsService;
    this.cats = new Array<string>();
  }

  onselect(cat: string){
    
  }
  onClick(): void{
    this.catsService.getNextCat((cat) => {
      this.cats.push(cat);
      console.log(cat);
      this.title =`You have ${this.cats.length} cats!`;
    });
  }
}

