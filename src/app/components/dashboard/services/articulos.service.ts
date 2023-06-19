import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor(private _http: HttpClient) {}

  addArticulo(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data); //Preguntar donde poner token
  }

  updateArticulo(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getArticuloList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteArticulo(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}
