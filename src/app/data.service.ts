import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource:BehaviorSubject<string>=new BehaviorSubject<string>('Initival value');
  public data:Observable<string>=this.dataSource.asObservable();

  public sendData(data:any){
    this.dataSource.next(data);
  }

  constructor() { }
}
