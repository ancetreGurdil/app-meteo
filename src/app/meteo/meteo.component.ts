import { Component,OnDestroy,OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation'
import { combineLatest, first, of, Subscription, switchMap} from 'rxjs';
import { ApiService } from '../api/api.service';
import { city } from '../model/city';
import { meteo } from '../model/meteo';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit,OnDestroy {

    public state!: string;
    public cityName!: string;
    public temperatureUnit!: string;
    public date: Date = new Date()
    public temperature!: number;

    subscription$!: Subscription;


  constructor(public geolocation$: GeolocationService,private api: ApiService) {}


  ngOnInit(): void {
    this.subscription$ = this.geolocation$.pipe(
      first(),
      switchMap((position) => {
        return combineLatest([
          of<GeolocationPosition>(position),
          this.api.getMeteo(position.coords.latitude,position.coords.longitude),
          this.api.getCity(position.coords.latitude,position.coords.longitude)
        ])
      }),
    ).subscribe(([{ coords: { latitude, longitude } }, {hourly: {apparent_temperature} }, [{name,state}]]: [GeolocationPosition, meteo,Array<city>]): void => {
      this.state = state ;
      this.cityName = name;
      this.temperature = apparent_temperature[this.date.getHours()]
    });
    console.log(this.date.getHours());

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
