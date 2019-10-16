import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'start-page', loadChildren: () => import('./Pages/start-page/start-page.module').then( m => m.StartPagePageModule)},
  { path: 'kbc-page', loadChildren: './Pages/kbc-page/kbc-page.module#KbcPagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
