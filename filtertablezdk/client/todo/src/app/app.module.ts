import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CardModule } from 'primeng/card';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ButtonModule } from 'primeng/button';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, TodoComponent, TodoTableComponent],
  imports: [ButtonModule, HttpClientModule, CardModule, BrowserModule, AppRoutingModule, MenubarModule,TableModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
