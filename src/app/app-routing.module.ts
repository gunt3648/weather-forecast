import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstructComponent } from './components/under-construct/under-construct.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TempMonitoringComponent } from './components/temp-monitoring/temp-monitoring.component';

const routes: Routes = [
  { path: '', redirectTo: 'under-construct', pathMatch: 'full' },
  { path: 'under-construct', component: UnderConstructComponent, pathMatch: 'full' },
  { path: 'temp-monitor', component: TempMonitoringComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
