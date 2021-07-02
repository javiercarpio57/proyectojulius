import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
  }

  GuardarLoading(loading: boolean): void {
    this.loading.next(loading);
  }

  ObtenerLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
