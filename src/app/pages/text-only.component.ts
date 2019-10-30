import { Component } from '@angular/core';

@Component({
  selector: 'text-only',
  template: `
  <pxb-empty-state title="No Alarms Found">
    <mat-icon empty-icon>notifications_none</mat-icon>
  </pxb-empty-state>`
})

export class TextOnlyComponent {
  title = '';
  constructor() { }
}
