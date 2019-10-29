// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Components
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

// Routing
import { ActionsComponent } from './pages/actions.component';
import { PlaceholderComponent } from './pages/placeholder.component';
import { SubcontentComponent } from './pages/subcontent.component';
import { TextOnlyComponent } from './pages/text-only.component';
import { AppRoutingModule } from './app.router';

// Components
import { AppComponent } from './app.component';

// PxBlue
import {EmptyStateModule} from '@pxblue/angular-components';

@NgModule({
  declarations: [
    AppComponent, ActionsComponent, PlaceholderComponent, SubcontentComponent, TextOnlyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    EmptyStateModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
