import { appRoutes } from './route.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Route} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { PlaceService } from './_services/place.service';
import { HttpModule } from '@angular/http';
import { AddPlaceComponent } from './addPlace/addPlace.component';
import { AgmCoreModule } from '@agm/core';
import { AddEventComponent } from './addEvent/addEvent.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPlaceComponent,
    AddEventComponent,
    LoadingComponent
],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyDVaEBJbJUUABKwIoA7nTy2A54HMZP90'
    }),
    FormsModule
  ],
  providers: [
    PlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
