import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PhotosModules} from './photos/photos.module'
import { HttpClientModule } from '@angular/common/http';
import { RoutingModules } from './app.routing.modules';
import { ErrorsModules } from './error/not-found/errorsModules';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModules,
    HttpClientModule,
    RoutingModules,
    ErrorsModules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
