import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { GridService } from './datagrid/grid.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    DatagridComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxDataGridModule

  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
