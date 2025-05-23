import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private apiUrl = `https://172.20.10.2:8443/api/vehiculos`;



  constructor(private http: HttpClient) { 
    console.log('VehiculoService API URL:', this.apiUrl);
  }

  registrarVehiculo(vehiculo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, vehiculo);
  }

  getVehiculosPorUsuario(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/u/${userId}`);
  }
}