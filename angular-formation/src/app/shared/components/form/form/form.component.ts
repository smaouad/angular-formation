import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../enums/state.enum';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  libelles = Object.values(State);
  newItem: Item;
  @Output() nItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.newItem =  {
      id: '',
      name: 'Said Mohamed',
      reference: '',
      state: State.ALIVRER,
    };
  }

  process(): void {
    this.nItem.emit(this.newItem);
  }

}
