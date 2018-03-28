import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../enums/state.enum';
import { Item } from '../../../models/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  libelles = Object.values(State);
  @Output() nItem: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  process(): void {
    this.nItem.emit(this.form.value);
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER
    });
  }

  isError(fieldName: string): Boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
