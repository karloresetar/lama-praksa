import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {
  todo: any;

  constructor(public todoService: TodoService, public router: Router, public route: ActivatedRoute) {
    route.params.subscribe((params) => {
      todoService.getOneTodo({ id: params?.['id'] }).subscribe(({ todo }: any) => {
        this.todo = todo;
      });
    });
  }

  ngOnInit(): void {}
}
