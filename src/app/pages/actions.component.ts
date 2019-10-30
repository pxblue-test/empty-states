import { Component } from '@angular/core';

@Component({
  selector: 'actions',
  template: `
  <pxb-empty-state title="No Devices">
    <mat-icon empty-icon>devices</mat-icon>
    <button mat-raised-button color="primary" actions>
      <mat-icon>add_circle</mat-icon>
      ADD DEVICE
    </button>
  </pxb-empty-state>`
})

export class ActionsComponent {
  title = '';
  constructor() { }
}
