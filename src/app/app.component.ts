import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sidebarOpen() {
      
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('nav-open');
    };
   
}
