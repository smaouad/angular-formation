import { Component, OnInit, Input } from '@angular/core';
import { COLLECTION } from '../../../core/services/collection';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collectionService.collection$.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

}
