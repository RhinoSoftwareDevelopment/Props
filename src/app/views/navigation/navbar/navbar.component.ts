import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarTittle: string;
  @Input() withBackButton: boolean;
  @Input() withSearchButton: boolean;

  constructor(private location: Location) { }

  ngOnInit() { }

  /**
   * Goes back to the last page.
   */
  goBack() {
    this.location.back();
  }

}
