import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes , RouterModule } from "@angular/router";
import { MeteoComponent } from "./meteo/meteo.component";
import { StatistiqueComponent } from "./statistique/statistique.component";
import { RechercheComponent } from "./recherche/recherche.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'path' },
  { path: 'meteo', component: MeteoComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'recherche', component: RechercheComponent },
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
