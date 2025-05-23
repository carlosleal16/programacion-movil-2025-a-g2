import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = environment.apiUrl 
    ? `${environment.apiUrl}api/producto`
    : 'https://172.20.10.2:8443/api/producto';

  constructor(private http: HttpClient) {
    console.log('ProductoService API URL:', this.apiUrl);
  }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  registrarProducto(producto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar/${id}`);
  }

  obtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}