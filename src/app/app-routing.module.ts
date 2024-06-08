// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MultiplesComponent } from './components/multiples/multiples.component';

const routes: Routes = [
  { path: '', redirectTo: 'multiples', pathMatch: 'full' },
  { path: 'multiples', component: MultiplesComponent },
  // otras rutas si es necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
