import { Component } from '@angular/core';

@Component({
  selector: 'actions',
  template: `
  <empty-state title="No Devices">
    <mat-icon empty-icon>devices</mat-icon>
    <button mat-raised-button color="primary" action>
      <mat-icon>add_circle</mat-icon>
      ADD DEVICE
    </button>
  </empty-state>`
})

export class ActionsComponent {
  title = '';
  constructor() { }
}