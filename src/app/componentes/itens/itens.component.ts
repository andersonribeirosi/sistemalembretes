import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: Item[];
  editEstado: boolean = false;
  itemEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItens().subscribe(itens =>{
      // console.log(itens);
      this.itens = itens;
    })
  }

  deleteItem(event, item: Item){
    this.limparEstado(event, item);
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item){
    this.editEstado = true;
    this.itemEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.limparEstado(event, item);
  }

  limparEstado(event, item){
    this.editEstado = false;
    this.itemEdit = null;
  }

}
