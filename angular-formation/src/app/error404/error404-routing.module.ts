import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes,
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class Error404RoutingModule { }
