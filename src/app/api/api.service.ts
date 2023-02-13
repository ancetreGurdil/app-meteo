import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { city } from '../model/city';
import { meteo } from '../model/meteo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMeteo(latitude: number , longitude: number): Observable<meteo>  {
   return this.http.get<meteo>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature`)
  }
  getCity(latitude: number, longitude: number): Observable<Array<city>>{
    return this.http.get<Array<city>>(`${environment.apiUrlCity}lat=${latitude}&lon=${longitude}&appid=9a66ccc6d645fbf42d685c76145df516`)
  }
}
