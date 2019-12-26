import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { UserVO } from '../models'
@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    this.loggedIn.next(true);
    return this.http.post<any>(`https://rdgrdx6aw6.execute-api.us-east-1.amazonaws.com/Mobilify/mobilify/process/signOn`, { userName, password })
      .pipe(retry(2),
        catchError(this.handleError)
        , map(responseBody => {
          return responseBody.status;

        }));
  }
  handleError(error: HttpErrorResponse) {
    console.log("Error Handling Works");
    return throwError(error);
  }

}
