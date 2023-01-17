import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './@shared/shared.module';
import { MenuListComponent } from './menu-list/components/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
