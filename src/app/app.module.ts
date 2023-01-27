import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './@shared/shared.module';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './content/meteo/components/meteo.component';
import { MenuListComponent } from './menu-list/components/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MeteoComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [
    {provide: LOCALE_ID,useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
