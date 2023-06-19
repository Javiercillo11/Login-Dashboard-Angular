import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  constructor(private _http: HttpClient) {}

  addFamilia(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data); //Preguntar donde poner token
  }

  updateFamilia(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getFamiliaList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteFamilia(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

}
