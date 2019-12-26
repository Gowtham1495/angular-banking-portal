import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(private http: HttpClient) { }

  getAccounts() {
    return this.http.get<any>('https://rdgrdx6aw6.execute-api.us-east-1.amazonaws.com/Mobilify/mobilify/process/getAccountList')
      .pipe(retry(2),
        catchError(this.handleError)
        , map(responseBody => {
          console.log(responseBody);
          return responseBody;

        }));
  }
  getTransactions(accountId) {
    console.log("addvdfgfd", accountId)
    const params = new HttpParams().set('accountid', accountId);
    return this.http.get<any>('https://rdgrdx6aw6.execute-api.us-east-1.amazonaws.com/Mobilify/mobilify/process/getTransactionList', { params })
      .pipe(retry(2),
        catchError(this.handleError)
        , map(responseBody => {
          console.log("transactions" + responseBody);
          return responseBody;

        }));
  }
  handleError(error: HttpErrorResponse) {
    console.log("Error Handling Works");
    return throwError(error);
  }
}
