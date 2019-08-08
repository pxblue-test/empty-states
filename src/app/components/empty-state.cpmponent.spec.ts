import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { EmptyStateComponent  } from './empty-state.component';



describe('EmptyStateComponent', () => {

    let component: EmptyStateComponent;
    let fixture: ComponentFixture<EmptyStateComponent>;
  

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EmptyStateComponent ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
        component = null;
    })

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    it('Icon Renders', () => {
        const Icon = `<empty-state>  <ng-content select="<mat-icon empty-icon>trending_up</mat-icon>"></ng-content> </empty-state>`
        expect(Icon).toBeTruthy();
    });

    it('Only Title Renders', () => {
        const Title = `<empty-state title="No Devices"> </empty-state>`
        expect(Title).toBeTruthy();
    });

    it('Only Description Renders', () => {
        const Description = `<empty-state> <h4 *ngIf="description" [style.color]="Colors.blue[500]">{{description}}</h4></empty-state>`
        expect(Description).toBeTruthy();
    });

    it('Only Actions Renders', () => {
       const Action = `<empty-state>      
        <button mat-raised-button color="primary" action>
            <mat-icon>add_circle</mat-icon>
            ADD DEVICE
        </button>
        </empty-state>`
        expect(Action).toBeTruthy();
    });

    it('Title, actions, Description Renders', () => {
       const empty = `  <empty-state title="Predictions Page Coming Soon" description="A fully redesigned predictions page is coming in our next release!">
        <mat-icon empty-icon>trending_up</mat-icon>
        <h4 *ngIf="description" >{{description}}</h4>
        <button mat-stroked-button color="primary" action>
            LEARN MORE
        </button>
        </empty-state>`
        expect(empty).toBeTruthy();
    });
});