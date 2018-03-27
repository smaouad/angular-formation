import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { Error404Component } from './error404/error404/error404.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        //enableTracing: true
        preloadingStrategy: PreloadAllModules
      }

    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
