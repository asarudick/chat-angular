import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(name: string, password: string): Observable<any> {
    // Dummy code. Would call an auth endpoint in practice.
    return of({name});
  }
}
