import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproduitComponent } from './application/addproduit/addproduit.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproduitComponent,
    ListproduitsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
