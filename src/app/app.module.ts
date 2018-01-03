import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { TabComponent } from './components/tab/tab.component';
import { Tab1Component } from './components/tab/tab1/tab1.component';
import { Tab2Component } from './components/tab/tab2/tab2.component';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { CricketerViewComponent } from './components/cricketers/cricketer-view/cricketer-view.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { APP_ROUTES } from './routing';
import { LoginGuard } from './guards/login.guard';
import { CricketerUnsavedGurad } from './guards/cricketer-unsaved.guard';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TabComponent,
    Tab1Component,
    Tab2Component,
    CricketersComponent,
    CricketerViewComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  providers: [
    LoginGuard,
    CricketerUnsavedGurad,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
