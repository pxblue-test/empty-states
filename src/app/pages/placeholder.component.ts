import { Component } from '@angular/core';

@Component({
  selector: 'placeholder',
  template: `
  <empty-state title="Predictions Page Coming Soon" description="A fully redesigned predictions page is coming in our next release!">
    <mat-icon empty-icon>trending_up</mat-icon>
    <button mat-stroked-button color="primary" action>
      LEARN MORE
    </button>
  </empty-state>`
})

export class PlaceholderComponent {
  title = '';
  constructor() { }
}