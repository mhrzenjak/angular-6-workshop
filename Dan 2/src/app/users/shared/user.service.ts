import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    return this.http.get('api/users')
      .pipe(map(response => response as Array<User>));
  }

  public getUser(id : number): Observable<User>{
    return this.http.get('api/users/' + id)
      .pipe(map(response => response as User));
  }
}
