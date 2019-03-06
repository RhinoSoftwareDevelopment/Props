import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit() { }

  /**
   * Returns a string with the warehouse name.
   * This method should be using an enum, or a 
   * more elegant way, but for now is ok.
   */
  getWarehouseName():string {
    switch (this.article.warehouse_id) {
      case 1: return "Bodega aula múltiple";
      case 2: return "Depósito 2";
      case 3: return "Depósito 5";
      case 4: return "Bodega camerino";
      default: "Bodega no especificada";
    }
  }

}
