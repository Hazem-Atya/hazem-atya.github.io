import { Component } from '@angular/core';

declare const mainJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main.js';

  ngOnInit(){
    mainJS();
  }

}
