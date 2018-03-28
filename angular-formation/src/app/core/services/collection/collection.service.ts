import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.itemsCollection = db.collection<Item>('collection');
    this._collection = this.itemsCollection.valueChanges();
  }

  get collection$(): Observable<Item[]> {
    return this._collection;
  }

  set collection$(collection: Observable<Item[]>) {
    this._collection = collection;
  }
}
