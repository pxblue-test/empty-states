import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Components
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from '@angular/material/grid-list';

import { ActionsComponent } from './pages/actions.component';
import { PlaceholderComponent } from './pages/placeholder.component';
import { TextOnlyComponent } from './pages/text-only.component';
import { SubContentComponent } from './pages/sub-content.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import {EmptyStateComponent} from '@pxblue/angular-components';

@NgModule({
  declarations: [AppComponent, ActionsComponent, PlaceholderComponent, TextOnlyComponent, SubContentComponent, EmptyStateComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
     FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
