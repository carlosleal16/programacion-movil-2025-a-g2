import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private readonly apiUrl = environment.apiUrl 
    ? `${environment.apiUrl}api/facturas`
    : 'https://172.20.10.2:8443/api/facturas';

  constructor(private readonly http: HttpClient) { 
    console.log('FacturaService API URL:', this.apiUrl);
  }

  generarFactura(factura: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, factura);
  }

  listarFacturas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  obtenerFacturaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  finalizarReserva(idReserva: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/reservas/${idReserva}/estado`, { estado: 'Finalizado' });
  }

  actualizarEstadoReserva(idReserva: number, estado: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/reservas/${idReserva}/estado`, { estado });
  }
}
