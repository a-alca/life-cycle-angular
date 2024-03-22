import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'life-cycle-angular';
  listaDeCompra! : Array<Item>;
  itemParaSerEditado! : Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
      this.listaDeCompra = this.listaService.getListaDeCompra();
      console.log(this.listaDeCompra)
  }

  editarItem(item: Item) {
    // console.log(item);
    this.itemParaSerEditado = item;
  }

  ngDoCheck() {
    console.log('DoCheck chamado')
    this.listaService.atualizarLocalStorage();
  }
}
