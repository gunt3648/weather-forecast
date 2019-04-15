import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstructComponent } from './under-construct/under-construct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'under-construct', pathMatch: 'full' },
  { path: 'under-construct', component: UnderConstructComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
