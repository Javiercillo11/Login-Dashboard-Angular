import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private _http: HttpClient) { }

  addCliente(data: any): Observable<any>{
    return this._http.post('http://localhost:3004/api/clientes', data);
  }

  updateCliente(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3004/api/clientes/:${id}`, data);
   
  }

  getClienteList(): Observable<any>{
    return this._http.get('http://localhost:3004/api/clientes');
  }

  deleteCliente(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3004/api/clientes/${id}`);
  }
}