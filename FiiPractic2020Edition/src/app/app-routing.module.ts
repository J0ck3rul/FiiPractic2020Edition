import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommingSoonModule } from './comming-soon/comming-soon.module';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comming-soon',
    pathMatch: 'full'
  },
  {
    path: 'comming-soon',
    loadChildren: () => import('./comming-soon/comming-soon.module').then(opt => opt.CommingSoonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
