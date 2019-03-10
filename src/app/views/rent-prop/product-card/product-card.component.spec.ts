import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { NavigationModule } from '../../navigation/navigation.module';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NavigationModule,
        MaterialDesignModule,
        FlexLayoutModule
      ],
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
