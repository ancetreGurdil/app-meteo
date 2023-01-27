import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  exports:[
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ]
})

export class MaterialModule{}
