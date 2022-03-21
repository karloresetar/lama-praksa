import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos:any[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      label: 'Današnji zazdaci',
      kategorija: 'Posao',
      datum: new Date(),
      stavke: [{
        label: 'marenda',
        isCompleted: true,
      },
      {
        label: 'odradit smjenu',
        isCompleted: true,
      },
      {
        label: 'očistit kuću',
        isCompleted: false,
      },
      {
        label: 'ić leć',
        isCompleted: true,
      },

      ],
    },
  ];
  }
}

// "manreda","odradit smjenu","očistit kuću","ić leć"
