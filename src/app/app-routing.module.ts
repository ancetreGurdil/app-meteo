import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes , RouterModule } from "@angular/router";
import { MeteoComponent } from "./content/meteo/components/meteo.component";

const routes: Routes = [
  { path: 'meteo', component: MeteoComponent },
];

export const appRouting = RouterModule.forRoot(routes)
@NgModule({
    declarations:[],
    imports:[
      RouterModule.forRoot(routes),
      CommonModule
    ],
    exports:[RouterModule]
  }
)

export class AppRouting { }
