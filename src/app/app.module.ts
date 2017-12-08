import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { DropDownEnvelopeComponent } from './drop-down-envelope/drop-down-envelope.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';




@NgModule({
  declarations: [
    AppComponent,
    DropDownEnvelopeComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
