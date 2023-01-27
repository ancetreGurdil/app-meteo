import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMeteo(latitude: number , longitude: number): Observable<Object>  {
   return this.http.get<Object>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature`)
  }
  getCity(name: string): Observable<Object>{
    return this.http.get<string>(`${environment.apiUrlCity}${name}`)
  }
}
