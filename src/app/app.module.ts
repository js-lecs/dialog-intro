import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { TabComponent } from './components/tab/tab.component';
import { Tab1Component } from './components/tab/tab1/tab1.component';
import { Tab2Component } from './components/tab/tab2/tab2.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TabComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
