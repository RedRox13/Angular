import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'http://localhost:4200/test';
  addTen(value: number): number {
    return value + 10;
  }
  getBiggerNumber(a: number, b: number) {
    return a > b ? a : b;
  }
  getObject(key: string, value: string | number): {} {
    return {[key]: value};
  }
  getArrayOfNumbers(value: number): number[] {
    const resultArr = [];
    for (let i = 0; i <= value; i++) {
      resultArr.push(i);
    }
    return resultArr;
  }
  getToDos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
