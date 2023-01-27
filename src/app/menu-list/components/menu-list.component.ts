import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  weekMeteo$!: Observable<Object | any >;
  cityLocation$!: Observable<Object | any>;
  weekMeteoTab!: number[][];

  constructor(private apiService: ApiService ){}

  ngOnInit(): void {
    this.getWeekMeteo();
    this.getCityLocation();
  }


  getWeekMeteo(){
    this.weekMeteoTab = [[],[],[],[],[],[],[]];
    this.weekMeteo$ = this.apiService.getMeteo(52.22,42);
    this.weekMeteo$.pipe(
    map( fullData => fullData = fullData.hourly),
    map( apparent_temperature => apparent_temperature.apparent_temperature),
    tap( temperature => {
      let hourInDay = 24;
      let dayInWeek = 7;
        // on aura 7 iterations par semaines
      for (let i = 0; i < temperature.length/hourInDay; i++) {
        // on aura 24 iterations pour 24 heures par jour
        for(let j = 0; j < temperature.length/dayInWeek; j++){
          this.weekMeteoTab[i].push(temperature[j+(i*hourInDay)])
        }
      }
    })).subscribe();
  }

  getCityLocation(){
    this.cityLocation$ = this.apiService.getCity('Berlin');
    this.cityLocation$.subscribe();
  }

}
