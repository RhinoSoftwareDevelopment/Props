import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/article.model';
import { Warehouse } from 'src/app/shared/warehouse.enum';

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
   */
  getWarehouseName(): string {
    return Warehouse[this.article.warehouse_id];
  }

}
