import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'sub-content',
  template: `
  <div class="card-wrapper">
        <mat-card class="card" fxLayout="column" *ngFor="let device of devices;"  [ngClass]="{ nodatacard: !device.performance }">
          <h3 class="title" [style.background]="device.performance ? Colors.blue[500] : Colors.orange[500]">Device {{device.id}}</h3>
          <mat-card-content fxFlex="1 1 0px" style="margin: 0">
            <mat-list *ngIf="device.performance" style="padding: 0">
              <mat-list-item class="list-row">
                <h4 class="list-text">Performance:</h4>
                <h4 class="list-text">{{device.performance}}</h4>
              </mat-list-item>   
              <mat-list-item class="list-row">
                <h4 class="list-text">Battery Life:</h4>
                <h4 class="list-text">{{device.battery}}</h4>
              </mat-list-item>   
            </mat-list>
            <empty-state *ngIf="!device.performance" title="No Data">
              <mat-icon empty-icon style="font-size: 100px">devices</mat-icon>
            </empty-state>
          </mat-card-content>

          <mat-card-actions *ngIf="device.performance" fxFlex="0 0 auto" style="margin: 0; text-align: center">
            <button mat-button [style.color]="Colors.blue[500]" >REPORT</button>
            <button mat-button [style.color]="Colors.blue[500]" style="margin-right: 0">LEARN MORE</button>
          </mat-card-actions>
        </mat-card>
        </div>
  `,
  styleUrls: ['./subcontent.component.scss']
})

export class SubContentComponent {
  Colors: Object = Colors;
  devices = [
    { id: 101 },
    { id: 201, performance: "Poor", battery: "20%" },
    { id: 202, performance: "Average", battery: "15%" },
    { id: 203, performance: "Excellent", battery: "96%" }
  ];

   constructor() {}
}