import { Component, Input, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation'
import { async, exhaustMap, first, map, Observable, take, tap } from 'rxjs';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  public coords: number[]= [];

  constructor(public geolocation$: GeolocationService,private api: ApiService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    this.geolocation$.subscribe((position) => {
      this.coords[0] = position.coords.latitude,
      this.coords[1] = position.coords.longitude
    });
  }




}
