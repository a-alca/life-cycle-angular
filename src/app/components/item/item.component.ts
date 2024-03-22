import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter();

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

}
