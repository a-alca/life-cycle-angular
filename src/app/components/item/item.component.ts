import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    // console.log('onInit')
  }

  ngOnChanges() {
    // console.log('Onchanges')
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    // console.log('deletar item')
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  ngOnDestroy() {
    // console.log('conseguiram me deletar')
  }

}
