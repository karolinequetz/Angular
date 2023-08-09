import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investments } from '../model/investiments';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListInvestmentsService {
  private url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  constructor(private http: HttpClient) {}

  public list(): Observable<Investments> {
    return this.http.get<Investments>(this.url).pipe(map((res) => res));
  }
}
