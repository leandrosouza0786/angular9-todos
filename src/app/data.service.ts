import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = ""

  constructor(private http: HttpClient) { }

  public composeHeaders(token) {
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers
    } else {
      return null;
    }
  }

  public getTodayTodos(token): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/v1/todos/undone/today`, {headers : this.composeHeaders(token)});
  }

  public getTomorrowTodos(token): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/v1/todos/undone/tomorrow`, {headers : this.composeHeaders(token)});
  }
  
  public getAllTodos(token): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/v1/todos`, {headers : this.composeHeaders(token)});
  }

  public postTodo(data, token): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/v1/todos`, data, {headers : this.composeHeaders(token)});
  }

  public markAsDone(data, token): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/v1/todos/mark-as-done`, data, {headers : this.composeHeaders(token)});
  }
}
