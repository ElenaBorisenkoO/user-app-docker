import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'src/app/shared/config';
import { IUser } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService implements OnInit {
  ngOnInit(): void {
  }
  constructor(private http: HttpClient) { }

  getUserData(name:string): Observable<IUser> {
    return this.http.get<IUser>(`${API_KEY}/users/${name}`);
  }
  getUserRepos(name:string): Observable<[]> {
    return this.http.get<[]>(`${API_KEY}/users/${name}/repos`);
  }

}
