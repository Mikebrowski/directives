import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NgForTestingComponent } from './ng-for-testing/ng-for-testing.component';
import { NgServerApiComponent } from './ng-server-api/ng-server-api.component';
import { NgclassPComponent } from './ngclass-p/ngclass-p.component';
import { SafetravesaloperatorComponent } from './safetravesaloperator/safetravesaloperator.component';

import { AwesomeinputDirective } from './awesomeinput.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForTestingComponent,
    NgServerApiComponent,
    NgclassPComponent,
    SafetravesaloperatorComponent,
    AwesomeinputDirective,
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
