import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent  {
  tabs = [
    { path: '/actions', label: 'ACTION' },
    { path: '/textonly', label: 'TEXT ONLY' },
    { path: '/placeholder', label: 'PLACEHOLDER' },
    { path: '/subcontent', label: 'SUB-CONTENT' }
  ];
}
