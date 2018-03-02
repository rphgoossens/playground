import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NewBeerComponent} from './new-beer/new-beer.component';
import {ApiClientService} from '../../out/index';


@NgModule({
  declarations: [
    AppComponent,
    NewBeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
