import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { TabComponent } from './components/tab/tab.component';
import { Tab1Component } from './components/tab/tab1/tab1.component';
import { Tab2Component } from './components/tab/tab2/tab2.component';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { CricketerViewComponent } from './components/cricketers/cricketer-view/cricketer-view.component';

const APP_ROUTES: Routes = [
  {
    path: 'cricketers',
    component: CricketersComponent
  },
  {
    path: 'exampleTab',
    component: TabComponent
  },
  {
    path:'',
    redirectTo:'/cricketers',
    pathMatch:'full'
  }
];




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TabComponent,
    Tab1Component,
    Tab2Component,
    CricketersComponent,
    CricketerViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
