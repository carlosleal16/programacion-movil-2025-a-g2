import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = environment.apiUrl 
    ? `${environment.apiUrl}/api/reservas`
    : 'https://172.20.10.2:8443/api/reservas';

  constructor(private http: HttpClient) {
    console.log('ReservaService API URL:', this.apiUrl);
  }

  getTiposServicio(tipoVehiculo: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/tipos-servicio?tipoVehiculo=${tipoVehiculo}`);
  }

  getReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, reserva);
  }

  eliminarReserva(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  actualizarMetodoPago(idReserva: number, metodo: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${idReserva}/metodo-pago`, { metodo }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getReservaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarReserva(reserva: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${reserva.id}`, reserva);
  }

  actualizarEstadoReserva(idReserva: number, estado: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${idReserva}/estado`, { estado });
  }
}