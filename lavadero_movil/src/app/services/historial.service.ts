import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private apiUrl = environment.apiUrl 
    ? `${environment.apiUrl}api/reservas`
    : 'https://172.20.10.2:8443/api/reservas';

  constructor(private http: HttpClient) {
    console.log('HistorialService API URL:', this.apiUrl);
  }

  getReservas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReservasPorUsuario(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${userId}`);
  }

  getReservaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteReserva(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  crearReserva(reserva: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, reserva);
  }

  actualizarEstadoReserva(id: number, estado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/estado`, { estado });
  }
}
