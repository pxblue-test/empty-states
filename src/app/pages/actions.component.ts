import { Component } from '@angular/core';

@Component({
  selector: 'actions',
  template: `
    <div style="padding: 20px; height: 100%">
  	<empty-state title="No Devices">
    <mat-icon empty-icon>devices</mat-icon>
    <button mat-raised-button color="primary" action>
      <mat-icon>add_circle</mat-icon>
      ADD DEVICE
    </button>
  </empty-state>
  </div>`
})

export class ActionsComponent {
  title = '';
  constructor() { }
}