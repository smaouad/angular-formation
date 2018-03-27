import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    FormsModule
  ],
  declarations: [
    NavComponent,
    StateDirective,
    FormComponent,

  ],
  exports: [
    NavComponent,
    StateDirective,
    FormComponent
  ]
})
export class SharedModule { }
