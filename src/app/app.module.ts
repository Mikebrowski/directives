import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NgForTestingComponent } from './ng-for-testing/ng-for-testing.component';
import { NgServerApiComponent } from './ng-server-api/ng-server-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForTestingComponent,
    NgServerApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
