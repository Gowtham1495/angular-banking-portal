import { Component, OnInit } from '@angular/core';
import { AccountsApiService } from '../accounts-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountLists: object;
  availableBalance: string;
  accountstatus: boolean;
  transactionLists: object;
  it: object;
  balancehide: boolean;
  tablehide: boolean;
  flip: string;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(
    private accountApi: AccountsApiService
  ) { }

  ngOnInit() {
    this.tablehide = true;
    this.flip = '';
    this.balancehide = true;
    console.log("inside account comp");
    this.accountApi.getAccounts().subscribe(data => {
      this.accountLists = data.accountList;
      // this.availableBalance = "Nil";
      for (var val of data.accountList) {
        this.accountbody(val);
      }

    });
  }

  getTransactions(acId) {

    console.log("account number" + acId)

    this.accountApi.getTransactions(acId).subscribe(data => {
      this.transactionLists = data.transactionList;
      this.balancehide = false;
      this.tablehide = true;
      for (var val of data.transactionList) {
        console.log("list" + val)
        this.it = val;
      }

    });


  }


  balance(data) {
    this.flip = 'fliping';
    console.log("SFffsffsf" + data.accounType)
    this.availableBalance = data.availableBalanceDisp.availBalValue;
    this.getTransactions(data.accountNumber);
    this.tablehide = true;


  }

  rotateBack() {
    this.flip = '';
  }


  balanceHide() {
    this.tablehide = false;

  }

  accountbody(data) {
    if (data.accountStatus == "Active") {
      this.accountstatus = true;
    } else {
      this.accountstatus = false;
    }
  }

}
