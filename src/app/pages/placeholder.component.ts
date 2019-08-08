import { Component } from '@angular/core';

@Component({
  selector: 'placeholder',
  template: `
   <div class="bg-container"></div>
  <div style="padding: 20px; height: 100%"> 
  <empty-state title="Predictions Page Coming Soon" description="A fully redesigned predictions page is coming in our next release!">
    <mat-icon empty-icon>trending_up</mat-icon>
    <button mat-stroked-button color="primary" action style="border-color: #007bc1">
      LEARN MORE
    </button>
  </empty-state>
  </div>`,
   styles: [`.bg-container { background-image: url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80); 
   position: absolute;  
   height: 100%; 
   width: 100%;   
   background-repeat: no-repeat;   
   background-size: cover; 
   opacity: 0.2; }`]
})

export class PlaceholderComponent {
  title = '';
  constructor() { }
}