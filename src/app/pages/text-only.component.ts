import { Component } from '@angular/core';

@Component({
  selector: 'text-only',
  template: `
  <div style="padding: 20px; height: 100%">
  <pxb-empty-state title="No Alarms Found">
    <mat-icon empty-icon>notifications</mat-icon>
  </pxb-empty-state>
  <div>`
})

export class TextOnlyComponent {
  title = '';
  constructor() { }
}
