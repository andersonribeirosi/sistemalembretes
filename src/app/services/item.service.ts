import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  itens: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    // this.itens = this.afs.collection('itens').valueChanges();

    this.itemsCollection = this.afs.collection('itens', ref => ref.orderBy('title', 'asc'));

    this.itens = this.afs.collection('itens').snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }

   getItens(){
     return this.itens;
   }

   addItem(item: Item){
     this.itemsCollection.add(item);
     alert('Lembrete adicionado com sucesso!');
   }

   deleteItem(item: Item){
     this.itemDoc = this.afs.doc(`itens/${item.id}`);
     this.itemDoc.delete();
     alert('Lembrete removido com sucesso!');
   }

   updateItem(item: Item){
     this.itemDoc= this.afs.doc(`itens/${item.id}`);
     this.itemDoc.update(item);
     alert('Atualizado com sucesso!');
   }

}

