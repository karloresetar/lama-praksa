import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navigationItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'LAMA FMS',
      },
      {
        label: 'KNJIGE',
      },
      {
        label: 'PREDMETI I PISMENA',
      },
      {
        label: 'ZADACI',
      },
      {
        label: 'OVJERE',
      },
      {
        label: 'PREGLEDI',
      },
      {
        label: 'KATALOZI',
      },
      {
        label: 'ALATI',
      },
      {
        label: 'POMOĆ',
      },
    ];
  }
}
