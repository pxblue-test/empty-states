//auto-generated imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionsComponent } from './pages/actions.component';
import { PlaceholderComponent } from './pages/placeholder.component';
import { SubcontentComponent } from './pages/subcontent.component';
import { TextOnlyComponent } from './pages/text-only.component';

const routes: Routes = [
    { path: 'actions', component: ActionsComponent },
    { path: 'placeholder', component: PlaceholderComponent },
    { path: 'subcontent', component: SubcontentComponent }, 
    { path: 'textonly', component: TextOnlyComponent },
    { path: '', redirectTo: '/actions', pathMatch: 'full' }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }