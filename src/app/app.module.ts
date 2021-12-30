import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LinksComponent } from './links/links.component';
import { GformComponent } from './gform/gform.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LinksComponent,
    GformComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
