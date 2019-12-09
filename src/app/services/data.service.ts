import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getDataCount() {
    return this.http.get('http://10.10.114.97:5555' + '/dataCount/');
  }
}
