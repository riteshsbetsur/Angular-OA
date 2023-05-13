import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataComponent } from './empData/data.component';
import { FooterComponent } from './footer/footer.component';
import { Foot1Component } from './foot1/foot1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataComponent,
    FooterComponent,
    Foot1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
