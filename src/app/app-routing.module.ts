import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
      {path: '', redirectTo: '/page1', pathMatch: 'full'},
    ])
  ]
})
export class AppRoutingModule { }
